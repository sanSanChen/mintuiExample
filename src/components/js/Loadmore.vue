<template>
<div>
	 <v-top title="Loadmore"></v-top>
	<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" @top-status-change="handleTopchange" @bottom-status-change="handleBottomchange">

		<transition-group name="fade" tag="ul">
			<li v-for="(list,index) in lists" :key="index">{{list.text}}</li>
		</transition-group>

		<div slot="top" class="mint-loadmore-top">
	      <span v-show="topStatus === 'pull'" >{{topPullText}}</span>
	      <span v-show="topStatus === 'drop'" >{{topDropText}}</span>
	      <span v-show="topStatus === 'loading'">{{topLoadingText}}</span>
	    </div>
	    <div slot="bottom" class="mint-loadmore-bottom">
	      <span v-show="bottomStatus === 'pull'" >{{bottomPullText}}</span>
	      <span v-show="bottomStatus === 'drop'" >{{bottomDropText}}</span>
	      <span v-show="bottomStatus === 'loading'">{{bottomLoadingText}}</span>
	    </div>
	</mt-loadmore>
</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return{
				topPullText:'下拉刷新',
				topDropText:'释放更新',
				topLoadingText:'刷新中...',
				bottomPullText:'上拉加载',
				bottomDropText:'释放加载',
				bottomLoadingText:'加载中...',
				topStatus:'',
				bottomStatus:'',
				allLoaded:false,
				id:0,
				size:3,
				lists:[]
			}
		},
		beforeCreate(){
			let self=this;
			this.$http('../../static/json/loadmore.json').then(function(result){
				self.lists=result.data.slice(self.id,self.size);
			});
		},
		methods:{
			loadTop(){
				let self=this;
				this.id=0;
				this.size=3;
				this.$http('../../static/json/loadmore.json').then(function(result){
					self.lists=result.data.slice(self.id,self.size);
					self.allLoaded=false;
				});
				this.$refs.loadmore.onTopLoaded();
			},
			loadBottom(){
				let self=this;
				this.id=this.size;
				this.size+=3;
				this.$http('../../static/json/loadmore.json').then(function(result){
					if (self.id>result.data.length) {
						self.lists.push({"text":"没有更多数据"});
						self.allLoaded=true;
					}else if(self.size>result.data.length&&self.id<result.data.length){
						self.lists=self.lists.concat(result.data.slice(self.id,result.data.length));
					}else{
						self.lists=self.lists.concat(result.data.slice(self.id,self.size));
					}
				});
				this.$refs.loadmore.onBottomLoaded();
			},
			handleTopchange(status){
				this.topStatus=status;
			},
			handleBottomchange(status){
				this.bottomStatus=status;
			}
		}
	}
</script>
<style type="text/css" scoped>
	ul{
		padding:0 .2rem;
	}
	li{
		height: 0.3rem;
		line-height: 0.3rem;
		text-align: center;
		border-bottom: 1px solid #eee;
	}
	.fade-enter-active, .fade-leave-active {
	  transition: all .7s ease-out
	}
	.fade-enter, .fade-leave-to{
	  opacity: 0;
	  transform: translate(5rem,0) rotate(360deg) scale(0,0);
	  -webkit-transform: translate(5rem,0) rotate(360deg) scale(0,0);
	}
</style>