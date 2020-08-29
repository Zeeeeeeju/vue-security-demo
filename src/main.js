import Vue from 'vue'
import App from './App.vue'
import router from "@/route/route";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import Vuex from 'vuex'
import store from "@/store";
import {Message}  from 'element-ui';

Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'

Vue.use(ElementUI)
Vue.use(Vuex)

Vue.config.productionTip = false
Vue.prototype.$message = Message;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
