import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import App from '../App.vue'
import Center from '../components/center/center.vue'
import Index from '../components/index/index.vue'
import Cart from '../components/cart'
import Class from '../components/class'

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/center',
      component: App,
      children: [
        {path: 'index', name: 'index', component: Index},
        {path: 'center', name: 'center', component: Center},
        {path: 'cart', name: 'cart', component: Cart},
        {path: 'class', name: 'class', component: Class}
      ]
    }
  ],
  linkActiveClass: 'footer-act'
})
