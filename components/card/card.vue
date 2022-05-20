<template>
	<view>
		<u-row gutter="12" style="flex-wrap: wrap">
		<u-col span="6" v-for="item in goodsList" @click="handleImg(item.id)">
		    <view class="goods-item">
				<u--image :showLoading="true" :src="item.cover_url" ></u--image>
				<view class="title">{{item.title}}</view>
				<view class="goodsBottom">
					<view class="price">￥{{item.price}}</view>
					<view class="sales">销量：{{item.sales}}</view>
				</view>
			</view>
		</u-col>
		</u-row>
	</view>
</template>

<script>
	export default {
		props: {
			goodsList: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				title: 'this is a card'
			}
		},
		methods: {
			handleImg(id) {
				console.log(id)
				uni.$u.route({
					url: 'pages/index/booksDetail',
					params: {
						id: id
					}
				})			
			}
		}
	}
</script>

<style lang="scss" scoped>
.goods-item {
		padding: 40rpx;
		margin-top: 30rpx;
		box-shadow: 0 12rpx 20rpx 0 rgba(0, 0, 0, 0.1);
		.title {
			margin: 10rpx 0;
			font-weight: 500;
			font-size: 32rpx;
		}
		.goodsBottom {
			display: flex;
			justify-content: space-between;
			.price {
				color: red;
			}
			.sales {
				color: #888;
			}
		}
	}
</style>
