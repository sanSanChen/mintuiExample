<template>
<div>
  <v-top title="Cellswipe"></v-top>

  <div class="page-cell">
    <div class="page-title">Cell Swipe</div>
    <mt-cell-swipe v-for="cell in cells" :right="rightButtons" :title="cell.title"> </mt-cell-swipe>
  </div>
</div>
</template>

<script>
  export default {
    created() {
      this.rightButtons = [
        {
          content: 'Mark as Unread',
          style: { background: 'lightgray', color: '#fff' }
        },
        {
          content: 'Delete',
          style: { background: 'red', color: '#fff' },
          handler:()=>{
            let oA=event.target.parentNode.parentNode.parentNode;
            this.$messagebox(this.options).then(function(res){
                  if (res=="confirm") {
                     oA.parentNode.removeChild(oA);
                   }
            })
        }}
      ];
    },
    data(){
      return{
        options:{
            title: '提示',
            message: 'delete?',
            showCancelButton: true
        },
        cells:[
          {
            title:"swipe me 1"
          },
          {
            title:"swipe me 2"
          },
          {
            title:"swipe me 3"
          }
        ]
      }

    },
    methods: {
      rightButtonHandler(evt) {
        console.log(123);
      }
    }
  };
</script>
