<template>
	<div>
		<mt-header fixed title="点击下方查看效果"></mt-header>
		<mt-cell v-for="router in routers" is-link :title="router.router" :to="'/'+router.router"></mt-cell>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				routers:[{
					router:'Toast'
				},{
					router:'Loadmore'
				},{
					router:'Infinitescroll'
				},{
					router:'Messagebox'
				},{
					router:'Actionsheet'
				},{
					router:'Popup'
				},{
					router:'Swipe'
				},{
					router:'Lazyload'
				},{
					router:'Range'
				},{
					router:'Progress'
				},{
					router:'Picker'
				},{
					router:'DatetimePicker'
				},{
					router:'Indexlist'
				},{
					router:'Paleteebutton'
				},{
					router:'Header'
				},{
					router:'Tabbar'
				},{
					router:'Navbar'
				},{
					router:'Button'
				},{
					router:'Cell'
				},{
					router:'Cellswipe'
				},{
					router:'Search'
				},{
					router:'Spinner'
				},{
					router:'Tabcontainer'
				},{
					router:'Switch'
				},{
					router:'Checklist'
				},{
					router:'Radio'
				},{
					router:"Field"
				},{
					router:"Badge"
				}]
			}
		},
		created(){
			let self=this;
			let routers=[];
			"abcdefghijklmnopqrstuvwxyz".split('').forEach(initial=>{
				let router=self.routers.filter(router=>router.router[0].toLowerCase()===initial);
				routers=routers.concat(router)
			});
			this.routers=routers;
		}
	}
</script>