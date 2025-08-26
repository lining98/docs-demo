# formSehems 表单

```ts
const rebateStatusOptions: any[] = [
	{
		label: '全部',
		value: '',
	},
	{
		label: '待返润',
		value: 1,
	},
	{
		label: '已返润',
		value: 2,
	},
];

const rebateBillSchemas: FormSchema[] = [
	{
		label: '商家ID',
		field: 'shopCustomId',
		component: 'Input',
		colProps: { span: 6 },
	},

	{
		label: '返润状态',
		field: 'rebateStatus',
		component: 'Select',
		colProps: { span: 6 },
		componentProps: {
			placeholder: '请选择',
			options: rebateStatusOptions,
			defaultValue: '',
		},
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

	{
		label: '打印类型',
		field: 'printType',
		component: 'RadioGroup',
		componentProps: {
			options: [
				{ label: '质检单', value: '1' },
				{ label: '商品标签', value: '2' },
			],
		},
		rules: [{ required: true, message: '请选择打印类型' }],
	},

	{
		label: '账单时间',
		field: 'createdAt',
		component: 'DatePicker',
		componentProps: {
			picker: 'month',
			format: 'YY-MM',
			valueFormat: 'YYYY-MM-DD',
		},
		colProps: { span: 6 },
	},
];
```
