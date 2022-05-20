<template>
	<view class="wrap">
		<!-- <view class="top"></view> -->
		<view class="content">
			<u--form
				:model="userForm"
				:rules="rules"
				ref="userForm"
			>
				<u-form-item label="邮箱" prop="email">
					<u-input type="email" v-model="userForm.email" />
				</u-form-item>
				<u-form-item label="密码" prop="password">
					<u--input type="password" v-model="userForm.password" />
				</u-form-item>
			</u--form>
						
			<button @click="submit" :style="[inputStyle]" class="getCaptcha">登录</button>
			<view class="alternative">
				<view class="password">密码登录</view>
				<view class="issue">注册</view>
			</view>
		</view>
	</view>
</template>

<script>
import {
		userLogin
	} from '../../config/api.js'
export default {
	data() {
		return {
			userForm: {
				email: '',
				password: ''
			},
			rules:  {
				email: [
					{
						required: true,
						message: '请输入邮箱',
						trigger: ['blur', 'change']
					}
				],
				password: [
					{
						required: true,
						message: '请输入密码',
						trigger: ['blur', 'change']
					}
				]
			}
		}
	},
	computed: {
		inputStyle() {
			let style = {};
			if(this.userForm.email && this.userForm.password) {
				style.color = "#fff";
				style.backgroundColor = this.$u.color['warning'];
			}
			return style;
		}
	},
	methods: {
		submit() {
			this.$refs.userForm.validate().then(res => {
				uni.$u.toast('校验通过')
					let params = {
						email: this.userForm.email,
						password: this.userForm.password
					}
					userLogin(params).then(res => {
						console.log(res)
					})
			}).catch(errors => {
				uni.$u.toast('校验失败')
			})
			
		}
	}
};
</script>

<style lang="scss" scoped>
.wrap {
	font-size: 28rpx;
	width: 100%;
	.content {
		width: 600rpx;
		margin: 80rpx auto 0;

		.getCaptcha {
			background-color: rgb(253, 243, 208);
			color: #909399;
			border: none;
			font-size: 30rpx;
			padding: 12rpx 0;
			margin: 30px 0;
			
			&::after {
				border: none;
			}
		}
		.alternative {
			color: #909399;
			display: flex;
			justify-content: space-between;
			margin-top: 30rpx;
		}
	}
}
</style>
