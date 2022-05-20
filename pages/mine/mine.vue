<template>
	<view>
		<view class="userInfo">
			<view class="userInfoLeft">
				<view class="userImg">
					<u-avatar :src="pic" size="140"></u-avatar>
				</view>
				<view class="u-flex-1">
					<view class="u-font-18 u-p-b-20">{{userName}}</view>
					<view class="u-font-14 u-tips-color">微信号: {{userNumber}}</view>
				</view>
			</view>
			<view class="userInfoRight">
				<view class="userScan">
					<u-icon name="scan" color="#969799" size="28"></u-icon>
				</view>
				<view class="userRight">
					<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
				</view>
			</view>
		</view>
		
		<u-cell-group>
			<view class="circleRow">
				<u-cell :border="false" icon="rmb-circle" title="支付"></u-cell>
				<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
			</view>
		</u-cell-group>
		<u-cell-group>
			<view class="circleRow">
				<u-cell :border="false" icon="star" title="收藏"></u-cell>
				<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
			</view>
		</u-cell-group>
		<u-cell-group>
			<view class="circleRow">
				<u-cell :border="false" icon="photo" title="相册"></u-cell>
				<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
			</view>
		</u-cell-group>
		<u-cell-group>
			<view class="circleRow">
				<u-cell :border="false" icon="coupon" title="卡券"></u-cell>
				<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
			</view>
		</u-cell-group>
		<u-cell-group>
			<view class="circleRow">
				<u-cell :border="false" icon="heart" title="关注"></u-cell>
				<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
			</view>
		</u-cell-group>
				
		<u-cell-group>
			<view class="circleRow">
				<u-cell icon="setting" :border="false" title="设置"></u-cell>
				<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
			</view>
		</u-cell-group>
		
		<u-cell-group>
			<navigator url="/pages/login/login" class="circleRow">
				<u-cell icon="setting" :border="false" title="登录"></u-cell>
				<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
			</navigator>
		</u-cell-group>
		
		<u-cell-group>
			<view class="circleRow">
				<u-cell icon="setting" :border="false" title="退出登录"></u-cell>
				<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
			</view>
		</u-cell-group>
		
		
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pic:'/static/boy.jpg',
				show:true,
				userName: '一半',
				userNumber: 'su100799'
			}
		},
		onLoad() {
			
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
page{
	background-color: #ededed;
	view {
		background-color: #fff;
	}
}

.userInfo {
	display: flex;
	padding: 30px 20px;
	align-items: center;
	justify-content: space-between;
	.userInfoLeft {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.userImg {
			margin-right: 10px;
		}
	}
	.userInfoRight {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.userScan {
			margin-left: 20px;
		}
		.userRight {
			margin-left: 10px;
		}
	}
}

.circleRow {
	display: flex;
	padding: 5px 20px 5px 10px;
	justify-content: space-between;
	align-items: center;
}

</style>
