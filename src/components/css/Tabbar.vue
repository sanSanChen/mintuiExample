<template>
<div>
   <v-top title="Tabbar"></v-top>

  <div class="page-tabbar">
    <div class="page-wrap">
      <div class="page-title">Tabbar</div>
      <div>
        <mt-cell class="page-part" title="当前选中" :value="selected" icon="back">
            <img slot="icon" src="../../assets/100x100.png" width="24" height="24">
        </mt-cell>
      </div>

      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="外卖">
          <mt-cell v-for="n in 10" :title="'餐厅 ' + n" />
          <router-link to="/">
            <mt-button type="danger" size="large">退出</mt-button>
          </router-link>
        </mt-tab-container-item>
        <mt-tab-container-item id="订单">
          <mt-cell v-for="n in 5" :title="'订单 ' + n" />
          <router-link to="/">
            <mt-button type="danger" size="large">退出</mt-button>
          </router-link>
        </mt-tab-container-item>
        <mt-tab-container-item id="发现">
          <mt-cell v-for="n in 7" :title="'发现 ' + n" />
          <router-link to="/">
            <mt-button type="danger" size="large">退出</mt-button>
          </router-link>
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
          <div class="page-part">
            <mt-cell v-for="n in 12" :title="'我的 ' + n" />
          </div>
          <router-link to="/">
            <mt-button type="danger" size="large">退出</mt-button>
          </router-link>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="外卖">
        <img slot="icon" src="../../assets/100x100.png" height="100" width="100">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="../../assets/100x100.png" height="100" width="100">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../../assets/100x100.png" height="100" width="100">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../../assets/100x100.png" height="100" width="100">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</div>
</template>

<script>
export default {
  name: 'page-tabbar',
  data() {
    return {
      selected: '外卖'
    };
  }
};
</script>

<style>
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }
  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
  .page-title{

  }
</style>