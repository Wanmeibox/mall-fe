import Vue from 'vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import axios from 'axios'
import 'flex.css'
// import axios from './utils'
// Vue.prototype.$axios = axios

axios.interceptors.request.use(function (config) { // 配置发送请求的信息
  store.dispatch('showLoading')
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) { // 配置请求回来的信息
  store.dispatch('hideLoading')
  console.log(response)
  return response
}, function (error) {
  store.dispatch('hideLoading')
  return Promise.reject(error)
})

axios.defaults.baseURL = 'http://jinxin.name:3000/api/'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$axios = axios

FastClick.attach(document.body)
Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  data: {
    eventHub: new Vue()
  }
}).$mount('#app')

export default app
