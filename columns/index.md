# 列配置

## 基础配置

```tsx
import dayjs, { Dayjs } from 'dayjs';
import type { TableColumn } from '@/components/core/dynamic-table';

export const tableColumns: TableColumn[] = [
	{
		title: '商品名称',
		dataIndex: 'goodName',
		align: 'center',
		hideInTable: true,
		customRender: ({ record }) => record.goodName,
	},
	{
		title: '订单状态',
		dataIndex: 'orderStatus',
		align: 'center',
		width: 90,
		formItemProps: {
			component: 'Select',
			label: '订单状态',
			colProps: {
				span: 6,
			},
			componentProps: {
				placeholder: '请选择',
				options: orderStatusOptions,
				defaultValue: '',
			},
		},
		customRender: ({ record }) => revertStatusText(orderStatusOptions, record.orderStatus),
	},

	{
		title: '收货地址',
		dataIndex: 'address',
		align: 'center',
		width: 250,
		hideInSearch: true,
		ellipsis: true,
		customRender: ({ record }) => (
			<div
				style={{
					textAlign: 'center',
					position: 'relative',
				}}
			>
				<div style={{ position: 'absolute', top: '-18px' }}>
					{record.province || '-'}
					{record.city || '-'}
					{record.area || '-'}
				</div>
			</div>
		),
	},
	{
		title: '发货时间',
		width: 180,
		dataIndex: 'deliveryAt',
		align: 'center',
		formItemProps: {
			component: 'RangePicker',
			componentProps: {
				valueFormat: 'YYYY-MM-DD',
				disabledDate: (current: Dayjs) => current > dayjs().endOf('day'),
				style: {
					width: '100%',
				},
			},
		},
		customRender: ({ record }) => record.deliveryAt || '-',
	},
];
```

## 列跳转

### 跳转

```tsx {12-28}
import type { TableColumn } from '@/components/core/dynamic-table';
import { Button } from 'ant-design-vue';
import router from '@/router';

export const tableColumns: TableColumn[] = [
	{
		title: '订单编号',
		dataIndex: 'saleOrderCode',
		align: 'center',
		width: 250,
		customRender: ({ record }) => {
			return (
				<div>
					<Button
						type="link"
						onClick={() => {
							if (flag) {
								router.push({
									path: '/transanction-pop-detail',
									query: { saleOrderId: record.id },
								});
							}
						}}
					>
						{record.saleOrderCode}
					</Button>
				</div>
			);
		},
	},
];
```

### 复制

```tsx
import { CopyOutlined } from '@ant-design/icons-vue';
<CopyOutlined
	style="cursor: pointer"
	onClick={() => {
		navigator.clipboard.writeText(record.saleOrderCode).then(() => {
			message.success('复制成功');
		});
	}}
/>;
```

## 表格操作列

```ts
import type { TableColumn } from '@/components/core/dynamic-table';
const cancelTableColumns: TableColumn[] = [
	...cancelColumns,
	{
		title: '操作',
		width: 150,
		dataIndex: 'ACTION',
		align: 'center',
		fixed: 'right',
		actions: ({ record }) => {
			const look = {
				label: '查看',
				// auth: '.shj.sale.sale.getOnlineSaleOrderDetail',
				onClick: () => {},
			};
			const cancelRefund = {
				label: '取消退款',
				// auth: '.shj.sale.sale.getOnlineSaleOrderDetail',
				onClick: () => {},
			};
			return [look, cancelRefund];
		},
	},
];
```
