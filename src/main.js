import Vue from 'vue'
import router from './router'
import store from './store/store.js'
import FastClick from 'fastclick'
import 'flex.css'
import axios from './utils'
Vue.prototype.$axios = axios

FastClick.attach(document.body)
Vue.config.productionTip = false

const app = new Vue({
  router,
  store
}).$mount('#app')

export default app
