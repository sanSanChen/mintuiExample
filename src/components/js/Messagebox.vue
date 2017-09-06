<template>
	<div>
		 <v-top title="Messagebox"></v-top>
		<mt-button type="danger" @click="Messagebox" size='small'>领养旺财</mt-button>
		<p>{{text}}</p>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				text:'',
				options:{
					title: '提示',
				  	message: '请输入主人名字领养旺财?',
				  	showCancelButton: true,
				  	iptName:"陈少华",
				  	errText:"主人验证不正确,领养失败!",
				  	sucessText:"恭喜！领养旺财成功！"
				}
			}
		},
		methods:{
			Messagebox(){
				let self=this;
				this.$messagebox.prompt(this.options.message,this.options.title).then(function(res){
					console.log(res)
					if(res.value==self.options.iptName){
						self.$messagebox.alert(self.options.sucessText,self.options.title)
						self.text="主人,我是你的小旺财~汪汪~"
					}
					else{
						self.$messagebox.alert(self.options.errText,self.options.title)
					}
				}).catch(function(res){
					console.log(res)
				})
			}
		}
	}
</script>
<style type="text/css" scoped>
	div{
		text-align: center;
		padding: .2rem .3rem;
	}
	p{
		text-align: center;
		line-height: .3rem;
		height: .3rem;
		font-size: .2rem;
		margin-top: .5rem;
	}
</style>