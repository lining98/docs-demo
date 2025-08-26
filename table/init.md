# 初始化界面

## vue

```vue
<template>
	<div>
		<a-card class="section">
			<a-radio-group v-model:value="returnStatus" button-style="solid" @change="handleStatusChange">
				<a-radio-button value="1">待审核</a-radio-button>
				<a-radio-button value="2">待处理</a-radio-button>
				<a-radio-button value="3">待确认</a-radio-button>
				<a-radio-button value="4">全部</a-radio-button>
			</a-radio-group>
		</a-card>
		<DynamicTable
			auto-height
			:data-request="loadTableData"
			:columns="waitingReturnTableColumns"
			:show-table-setting="false"
		>
			<template #toolbar>
				<a-button
					type="primary"
					:disabled="!$auth('shj.return.exportReturnOrderByPage')"
					:loading="deriveLoading"
					@click="handleExport('待退回')"
				>
					导出
				</a-button>
			</template>
		</DynamicTable>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { message } from 'ant-design-vue';
	import { waitingReturnColumns, cancelColumns } from './columns';
	import { returnedSchemas, returnActionSchemas } from './formSchemas';
	import type { LoadDataParams, TableColumn } from '@/components/core/dynamic-table';
	import { useTable } from '@/components/core/dynamic-table';
	import { useFormModal } from '@/hooks/useModal/index';
	import { exportAxiosExcel } from '@/utils/Export2Excel';
	import {
		getReturnOrderByPage, // 分页查询退回单
		recycleReturn, // 回收退回
	} from '@/api/reverse-management/recycle-return';
	import Api from '@/core/permission/modules/shj/reverse-management/recycle-return';

	defineOptions({ name: 'ShjAfterSale' });

	const [showModal] = useFormModal();
	const [DynamicTable, dynamicTableInstance] = useTable({
		formProps: {
			schemas: returnedSchemas,
			labelWidth: 120,
			actionColOptions: { span: 6 },
		},
	});

	const returnStatus = ref('1');
	const deriveLoading = ref<boolean>(false);
	const searchParams = ref<any>({});

	const handleStatusChange = () => {
		dynamicTableInstance?.reload();
	};

	const loadTableData = async (params: LoadDataParams) => {
		params.returnStatus = +returnStatus.value;
		if (params.createdAt) {
			params.createdAtStartDate = params.createdAt?.[0];
			params.createdAtEndDate = params.createdAt?.[1];
		}
		if (params.returnedAt) {
			params.returnedAtStartDate = params.returnedAt?.[0];
			params.returnedAtEndDate = params.returnedAt?.[1];
		}
		delete params.createdAt;
		delete params.returnedAt;

		searchParams.value = params;
		const data = await getReturnOrderByPage(params);
		return data;
	};

	const operation: TableColumn[] = [
		{
			title: '操作',
			width: 120,
			dataIndex: 'ACTION',
			align: 'center',
			fixed: 'right',
			actions: ({ record }) => [
				{
					label: '退回',
					auth: { perm: '.shj.return.return', effect: 'disable' },
					onClick: async () => {
						handleReturned(record);
					},
				},
			],
		},
	];
	const cancelOperation: TableColumn[] = [
		{
			title: '操作',
			width: 120,
			dataIndex: 'ACTION',
			align: 'center',
			fixed: 'right',
			actions: ({ record }) => [
				{
					label: record.returnWaybillId ? '-' : '退回',
					auth: { perm: '.shj.return.return', effect: 'disable' },
					onClick: async () => {
						if (!record.returnWaybillId) {
							handleReturned(record);
						}
					},
				},
			],
		},
	];

	// 导出
	const handleExport = async (exportName: string) => {
		deriveLoading.value = true;
		exportAxiosExcel(exportName, searchParams.value, Api.exportReturnOrderByPage, (loading) => {
			deriveLoading.value = loading;
		});
	};
</script>
```

## columns.tsx

```tsx
import type { TableColumn } from '@/components/core/dynamic-table';
const orderChannelMap = {
	0: '-',
	1: 'C端快递',
	2: 'B端回收',
	3: '线下回收',
};

export const revertStatusText = (list: any, val: number) => {
	const data = list.find((item) => item.value === val);
	return data?.label ?? '-';
};

const AddressRender = ({ record }) => {
	const addressObj = record.receivingAddress ? JSON.parse(record.receivingAddress) : null;
	return (
		<div style={{ textAlign: 'left', wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}>
			{record.receivingAddress ? (
				<div>
					<div>发货地址：{Object.values(addressObj).join(' ')}</div>
					<div>联系人：{record.contactPerson}</div>
					<div>联系电话：{record.contactPhone}</div>
				</div>
			) : (
				<p>{'-'}</p>
			)}
		</div>
	);
};

const OrderCodeLink = ({ recycleOrderCode }: { recycleOrderCode: string }) => {
	return (
		<div>
			<Button
				type="link"
				onClick={() => {
					router.push({
						path: '/transanction-detail',
						query: { orderId: recycleOrderCode },
					});
				}}
			>
				{recycleOrderCode}
			</Button>
			<CopyOutlined
				style="cursor: pointer"
				onClick={() => {
					navigator.clipboard.writeText(recycleOrderCode).then(() => {
						message.success('复制成功');
					});
				}}
			/>
		</div>
	);
};

export const waitingReturnColumns: TableColumn[] = [
	{
		title: '发货信息',
		dataIndex: 'receivingAddress',
		align: 'center',
		width: 250,
		customRender: ({ record }) => <AddressRender record={record} />,
	},
	{
		title: '回收订单编号',
		dataIndex: 'recycleOrderCode',
		align: 'center',
		width: 230,
		customRender: ({ record }) => <OrderCodeLink recycleOrderCode={record.recycleOrderCode} />,
	},
	{
		title: '采购渠道',
		dataIndex: 'purchaseChannel',
		align: 'center',
		width: 100,
		customRender: ({ record }) => orderChannelMap[record.purchaseChannel],
	},
	{
		title: '供应商',
		dataIndex: 'supplier',
		align: 'center',
		width: 180,
		customRender: ({ record }) => record.supplier || '-',
	},
	{
		title: '生成时间',
		dataIndex: 'createdAt',
		align: 'center',
		width: 160,
	},
];
```
