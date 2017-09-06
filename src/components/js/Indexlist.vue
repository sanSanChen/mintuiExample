<template>
<div>
   <v-top title="Indexlist"></v-top>
  <div class="page-indexlist">
    <h1 class="page-title">Index List</h1>
    <p class="page-indexlist-desc">此例请使用手机查看</p>
    <div class="page-indexlist-wrapper">
      <mt-index-list>
        <mt-index-section v-for="item in alphabet" :index="item.initial">
          <mt-cell v-for="cell in item.cells" :title="cell"></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
  </div>
</div>
</template>
<style scoped>
      .page-indexlist-desc {
        text-align: center;
        color: #666;
        padding-bottom: 5px;
      }
      .page-indexlist-wrapper {
        width: 100%;
        border-top: solid 1px #ddd;
      }

</style>

<script type="text/babel">
  const NAMES = ['Aaron', 'Alden','Austin', 'Baldwin', 'Zack', 'Zane','Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', ];
  export default {
    data() {
      return {
        alphabet: []
      };
    },
    created() {
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {/*按首字母排序*/
        let cells = NAMES.filter(name => name[0] === initial);
        if (cells.length) {
        	this.alphabet.push({
	          initial,
	          cells
	        });
        }
      });
    }
  };
</script>