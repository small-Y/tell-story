import Vue from 'vue'
import App from './App'
import router from './router'
import './bootstrap/css/bootstrap.min.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import qs from "qs"
import axios from 'axios'
Vue.prototype.$http = axios;

Vue.config.productionTip = false

Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  render:h =>h(App)
})
