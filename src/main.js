// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Mint from 'mint-ui';
import Axios from 'axios';
import '../static/js/rem.js';
import '../static/css/common.css';
import '../node_modules/mint-ui/lib/style.css';
import Top from "./components/Top.vue";
Vue.use(Mint);
Vue.prototype.$http=Axios;
Vue.config.productionTip = false;
Vue.component('v-top',Top);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
