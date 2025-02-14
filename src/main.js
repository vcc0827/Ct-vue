// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import moment from 'moment'
import Axios from 'axios'
import store from './router/store'

import '../static/js/jquery-1.11.1.min'
// import '../static/js/lightbox-plus-jquery.min'
// import '../static/js/easing'
import '../static/js/jarallax'
import '../static/js/move-top';
import '../static/js/responsiveslides.min'
import '../static/js/SmoothScroll.min'
import '../static/js/bootstrap'



Axios.defaults.baseURL='http://127.0.0.1:3000'
Vue.prototype.$axios=Axios;

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.filter('dateformat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
})

