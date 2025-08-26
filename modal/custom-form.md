# 自定义表单弹窗

```vue
<template>
	<DraggableModal
		v-model:visible="expressInformationShow"
		title="修改取件信息"
		width="500px"
		:confirm-loading="submitLoading"
		@ok="onExpressInformation(formState)"
		@cancel="handleCloseModal"
	>
		<slot name="title">
			<a-form
				ref="pickupFormRef"
				:model="formState"
				name="basic"
				:label-col="{ span: 7 }"
				:wrapper-col="{ span: 16 }"
				autocomplete="off"
			>
				<a-form-item
					label="取件地址"
					name="address"
					:rules="[{ required: true, message: '请输入取件地址' }]"
					maxlength="60"
				>
					<a-input v-model:value="formState.address" placeholder="请输入" :maxlength="128" />
				</a-form-item>
				<a-form-item
					label="取件日期"
					name="pickupDate"
					:rules="[{ required: true, message: '请选择取件日期' }]"
					maxlength="60"
				>
					<Select v-model:value="formState.pickupDate" :options="dateOptions" allow-clear placeholder="请选择" />
				</a-form-item>
				<a-form-item
					label="取件时间"
					name="pickupTime"
					:rules="[{ required: true, message: '请选择取件时间' }]"
					maxlength="60"
				>
					<TimePicker
						v-model:value="formState.pickupTime"
						style="width: 100%"
						hide-disabled-options
						placeholder="请选择"
						:disabled-hours="disabledHours"
						:disabled-minutes="disabledMinutes"
						format="HH:mm"
					/>
				</a-form-item>
				<a-form-item
					label="联系人"
					name="userName"
					:rules="[{ required: true, message: '请输入联系人' }]"
					maxlength="60"
				>
					<a-input v-model:value="formState.userName" placeholder="请输入" :maxlength="128" />
				</a-form-item>
				<a-form-item
					label="联系电话"
					name="userPhone"
					:rules="[
						{ required: true, message: '请输入联系电话' },
						{ pattern: /^\d{11}$/, message: '电话号格式错误' },
					]"
					maxlength="60"
				>
					<a-input v-model:value="formState.userPhone" placeholder="请输入" />
				</a-form-item>
			</a-form>
		</slot>
	</DraggableModal>
</template>
<script lang="tsx" setup>
	import { DraggableModal } from '@/components/core/draggable-modal';
	const formState = ref<any>({});
</script>
```
