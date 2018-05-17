import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'

import Main from '@/pages/main'
import Discover from '@/pages/discover'
import True from '@/pages/true'
import Screm from '@/pages/screm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        { path: '/main', name: 'Main',component: Main },
        { path: '/discover', name: 'Discover',component: Discover },
        { path: '/true', name: 'True',component: True },
        { path: '/screm', name: 'Screm',component: Screm }
      ]
    }
  ]
})
