import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import App from '../App.vue'
import Center from '../components/center/center.vue'

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: App,
      children: [
        {path: 'center', name: 'center', component: Center}
      ]
    }
  ],
  linkActiveClass: 'footer-act'
})
