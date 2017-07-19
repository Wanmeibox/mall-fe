import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import App from '../App.vue'
import Center from '../components/center/center.vue'
import Index from '../components/index/index.vue'

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/center',
      component: App,
      children: [
        {path: 'index', name: 'index', component: Index},
        {path: 'center', name: 'center', component: Center}
      ]
    }
  ],
  linkActiveClass: 'footer-act'
})
