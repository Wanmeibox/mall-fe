import Vue from 'vue'
import router from './router'
import store from './store/store.js'
import FastClick from 'fastclick'
import 'flex.css'
// import axios from 'axios'

FastClick.attach(document.body)
Vue.config.productionTip = false
// Vue.proptotype.$http = axios

const app = new Vue({
  router,
  store
}).$mount('#app')

export default app
