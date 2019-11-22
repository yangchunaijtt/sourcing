// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'//引入store
import VueCookies from 'vue-cookies'
import ElementUI from 'element-ui';
import http from "./utils/axios.js";
import 'element-ui/lib/theme-chalk/index.css';
import utils from "./utils/urlGet" //获取url参数



Vue.use(ElementUI);
Vue.use(VueCookies)
// Vue.use(axios);

Vue.config.productionTip = false
Vue.prototype.$http = http;
Vue.prototype.$utils = utils; //注册全局方法

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
