import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import App from '../App.vue'
import Center from '../components/center/center.vue'
import Index from '../components/index'
import Cart from '../components/cart'
import Class from '../components/class'
import Detail from '../components/class/detail.vue'
// import Ball from '../components/ball/ball.vue'

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: App,
      children: [
        {path: 'index', name: 'index', component: Index},
        {path: 'center', name: 'center', component: Center},
        {path: 'cart', name: 'cart', component: Cart},
        {path: 'class', name: 'class', component: Class},
        {path: 'detail', name: 'detail', component: Detail}
        // {path: 'ball', name: 'ball', component: Ball}
      ]
    }
  ],
  linkActiveClass: 'footer-act'
})
