import Vue from 'vue'
import Router from 'vue-router'
import mock from '@/components/mock'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mock',
      component: mock
    }
  ]
})
