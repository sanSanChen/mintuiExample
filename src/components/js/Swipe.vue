<template>
<div>
	 <v-top title="Swipe"></v-top>
	<mt-swipe @change="change" :auto="2000">
		<mt-swipe-item v-for="list in lists" :style="list.style">
			<h2>{{list.text}}</h2>
			<a href="javascript:;" v-for="li in 10">{{li}}</a>
		</mt-swipe-item>
	</mt-swipe>
</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				lists:[
					{
						text:"我是1号轮播图"
					},
					{
						text:"我是2号轮播图"
					},
					{
						text:"我是3号轮播图"
					}
				]
			}
		},
		methods:{
			change(index){

			}
		}
	}
</script>
<style type="text/css" scoped>
	.mint-swipe{
		width: 100%;
		height:2.5rem;
		background: #eee;
		padding: 0.2rem .3rem;
		box-sizing: border-box;
	}
	.mint-swipe-item{
		text-align: center;
		font-weight: 700;
	}
	.mint-swipe-item h2{
		height: .3rem;
		line-height: .3rem
	}
	.mint-swipe-item a{
		display: inline-block;
		height:.3rem;
		width:.3rem;
		line-height: .3rem;
		border-radius: 50%;
		color: #000;
		border:1px solid #000;
		margin:.1rem;
	}
</style>