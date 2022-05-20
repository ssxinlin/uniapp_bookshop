<template>
	<view>
		<u-swiper :list="goodsImgList" height="240rpx"></u-swiper>
		
		<view class="">
			<u-tabs :list="tabList" @click="clickTab" itemStyle="height: 34px"></u-tabs>
		</view>
		
		<card :goodsList="goodsList"></card>
	</view>
</template>

<script>
	import {
		getGoods
	} from '../../config/api.js'
	export default {
		data() {
			return {
				title: '首页',
				goodsImgList: [],
				tabList: [{
						name: '默认'
					},
					{
						name: '销量'
					},
					{
						name: '推荐'
					},
					{
						name: '最新'
					}
				],
				tabType: '',
				page: 1,
				goodsList: []
			}
		},
		onLoad() {
			this.getGoodsList()
			
		},
		methods: {
			getGoodsList() {
				const params = {
					page: this.page
				}
				if(this.tabType === '销量') {
					params.sales = 1
				} else if (this.tabType === '推荐') {
					params.recommend = 1
				} else if (this.tabType === '最新') {
					params.new = 1
				}
				uni.showLoading({
					title:'加载中'
				})
				getGoods(params).then(res => {
					res.slides.forEach((item, index) => {
						this.goodsImgList.push(item.img_url)
					})
					this.goodsList = [...this.goodsList, ...res.goods.data]
					uni.hideLoading()
				})
			},
			clickTab(e) {
				console.log(e)
				this.tabType = e.name
				this.goodsList = []
				this.getGoodsList()
			}
		},
		
		onReachBottom() {
			this.page = this.page + 1
			this.getGoodsList()
		},
	}
</script>

<style>
	
</style>
