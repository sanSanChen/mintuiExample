<template>
<div>
	<v-top title="Lazyload"></v-top>
	<ul>
		<li v-for="list in lists">
			<img v-lazy="list.src">
		</li>
	</ul>
</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return{

				lists:[
					{
						src:require('../../../static/img/1.jpg')
					},
					{
						src:require('../../../static/img/1.jpg')
					},
					{
						src:require('../../../static/img/1.jpg')
					},
					{
						src:require('../../../static/img/1.jpg')
					},
					{
						src:require('../../../static/img/1.jpg')
					},
					{
						src:require('../../../static/img/1.jpg')
					},
					{
						src:require('../../../static/img/1.jpg')
					},
					{
						src:require('../../../static/img/1.jpg')
					},
					{
						src:require('../../../static/img/1.jpg')
					},
				]
			}
		}
	}
</script>
<style type="text/css" scoped>
	li{
		height: 2rem;
	}
	li img{
		width: 100%;
		height: 100%;
	}
	img[lazy=loading] {
	  width: .4rem;
	  height: 100%;
	  margin: auto;
	}
</style>