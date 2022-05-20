<template>
	<view>
		{{id}}
	</view>
</template>

<script>
	import { getGoodsDetail } from '../../config/api.js'
	export default {
		data() {
			return {
				id: ''
			}
		},
		onLoad(option) {
			this.id = option.id
			this.getGoodsDetail(option.id)
		},
		methods: {
			getGoodsDetail(id) {
				const params = {
					id: id
				}
				getGoodsDetail(id).then(res => {
					console.log("商品详情: ", res)
				})
			}
		}
	}
</script>

<style>

</style>
