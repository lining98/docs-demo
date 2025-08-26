# Modal 对话框

## 基础

```vue
<script lang="tsx" setup>
	import { DraggableModal } from '@/components/core/draggable-modal';
</script>

<template>
	<DraggableModal
		v-model:visible="modalVisible"
		title="title"
		:footer="null"
		width="600px"
		:body-style="{ height: '500px' }"
	>
		<div></div>
	</DraggableModal>
</template>
```

## 表单确认框

### 表单确认框

```ts
import type { TableColumn } from '@/components/core/dynamic-table';
import { useFormModal } from '@/hooks/useModal/index';

const [showModal, ModalRender] = useFormModal();
```

```ts
const handleAPI = async (record) => {
	const [formRef] = await showModal<any>({
		modalProps: {
			title: 'title',
			width: 600,
			onFinish: async (values) => {
				const data = {
					xxx: record.xxx,
				};
				await apiName(data);
				message.success('操作成功');
				dynamicTableInstance?.reload();
			},
		},
		formProps: {
			labelWidth: 100,
			schemas: apiSchemas,
		},
	});
	formRef?.setFieldsValue({ record });
};
```

### 处理异常

```ts
const handleAPI = async (record) => {
	const [formRef] = await showModal<any>({
		modalProps: {
			title: 'title',
			width: 600,
			onFinish: async (values) => {
				const data = {
					xxx: record.xxx,
				};
				try {
					await apiName(data);
					message.success('操作成功');
					dynamicTableInstance?.reload();
				} catch (error: any) {
					if (error.code == 140008) {
						ModalRender.hide();
						dynamicTableInstance?.reload();
					} else {
						return Promise.reject();
					}
				}
			},
		},
		formProps: {
			labelWidth: 100,
			schemas: apiSchemas,
		},
	});
	formRef?.setFieldsValue({ record });
};
```

### 表单 formSchema

```ts
import type { FormSchema } from '@/components/core/schema-form/';
export const rebateSchemas: FormSchema[] = [
	{
		label: '返润方式',
		field: 'rebateWay',
		component: 'RadioGroup',
		colProps: { span: 24 },
		componentProps: {
			options: [
				{
					label: '线上打款',
					value: '1',
				},
				{
					label: '线下打款',
					value: '2',
				},
			],
		},
		rules: [{ required: true, message: '请选择返润方式' }],
	},
	{
		label: '返润金额',
		field: 'actualRebateAmount',
		component: 'InputNumber',
		colProps: { span: 24 },
		componentProps: {
			addonAfter: '元',
			controls: false,
			precision: 2,
			min: 0,
		},
		rules: [
			{
				required: true,
				validator: async (_, value) => {
					if (!value && value !== 0) {
						return Promise.reject('请输入返润金额');
					}
					if (value < 0) {
						return Promise.reject('返润金额仅允许输入0和正数');
					}
					if (value > 25000) {
						return Promise.reject('返润金额不允许超过25000元');
					}
					return Promise.resolve();
				},
				trigger: 'blur',
			},
		],
	},
];
```

## 对话提示框

```tsx
Modal.confirm({
	content: h('div', { style: { fontSize: '24px', textAlign: 'center' } }, [h('p', `确认取消退款？`)]),
	icon: null,
	onOk: async () => {
		await recycleReturn({ returnOrderId: record.returnOrderId });
		message.success('取消退货成功');
		dynamicTableInstance?.reload();
	},
});
```
