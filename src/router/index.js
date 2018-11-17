import Vue from 'vue'
import Router from 'vue-router'
import MSite from '@/pages/MSite/Msite'
import Search from '@/pages/Search/Search'
import Order from '@/pages/Order/Order'
import ProFile from '@/pages/ProFile/ProFile'
import Login from '@/pages/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      name: 'MSite',
      component: MSite,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      name: 'ProFile',
      component: ProFile,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
