import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import store from '../store'
import { initMenu } from '../utils/menu'
import HrInfo from '../views/HrInfo'

Vue.use(Router)

const routes = [

  /**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */
  {
    path: '/',
    name: 'Login',
    component: Login,
    hidden: true
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    hidden: true,
    meta: {
      roles: ['admin', 'user']
    },
    children: [{
      path: '/hrinfo',
      name: '个人中心',
      component: HrInfo,
      hidden: true
    }]
  },
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new Router({
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/') {
//     next()
//   } else {
//     if (window.sessionStorage.getItem('user')) {
//       console.log(`sessionStorage.user ---> ${window.sessionStorage.getItem('user')}`)
//       next()
//     } else {
//       next('/?redirect=' + to.path)
//     }
//   }
// })

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next()
  } else {
    if (window.sessionStorage.getItem('user')) {
      initMenu(router, store)
      next()
    } else {
      // 如果session中没有user，重定向至要去的路径
      next('/?redirect=' + to.path)
    }
  }
})

export default router
