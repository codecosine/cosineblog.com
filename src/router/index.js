import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/C_Home'
import Article from '@/views/C_Article'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    }
  ]
})
