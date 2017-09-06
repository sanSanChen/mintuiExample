<template>
<div>
	 <v-top title="Progress"></v-top>
	<mt-range v-model="value">
		<!-- <div slot="start">0</div> -->
		<div slot="end">{{value}}</div>
	</mt-range>
	<mt-progress :value="value">
	  	<!-- <div slot="start">0%</div> -->
	  	<div slot="end">{{value+"%"}}</div>
	</mt-progress>
</div>
</template>
<script type="text/javascript">
		export default {
			data(){
				return {
					value:0
				}
			}
		}
</script>