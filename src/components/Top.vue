<template>
	<div>
      	<mt-header :title="title" fixed>
        	<router-link to="/" slot="left">
          	<mt-button icon="back">返回</mt-button>
        	</router-link>
        <mt-button icon="more" slot="right"></mt-button>
      	</mt-header>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{

			}
		},
		props:['title']
	}
</script>