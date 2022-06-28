import Vue from 'vue'
import Router from 'vue-router'
import mock from '@/components/mock'
import navigation from '@/components/navigation'
import navDemo from '@/components/navDemo'
import navH from '@/components/navH'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mock',
      component: mock
    },
    {
      path: '/h',
      name: 'navigation',
      component: navigation
    },
    {
      path: '/demo',
      name: 'navDemo',
      component: navDemo
    },
    {
      path: '/navH',
      name: 'navH',
      component: navH
    }
  ]
})
