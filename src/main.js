import Vue from 'vue'
import router from './router'
import store from './store/store.js'
// import axios from 'axios'

Vue.config.productionTip = false
// Vue.proptotype.axios = axios

const app = new Vue({
  router,
  store
}).$mount('#app')

export default app
