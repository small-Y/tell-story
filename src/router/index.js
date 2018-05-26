import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'

import Main from '@/pages/main'
import Discover from '@/pages/discover'
import True from '@/pages/true'
import Screm from '@/pages/screm'
import Search from '@/pages/search'
import Mymain from '@/pages/mymain'
import Setting from '@/pages/setting'
import User from '@/pages/user'

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
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/mymain',
      name: 'Mymain',
      component: Mymain
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/user/:title',
      name: 'User',
      component: User
    }
  ]
})
