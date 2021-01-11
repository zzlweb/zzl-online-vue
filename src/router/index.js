import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: '首页',
      component: () => import('@/views/home/index'),
      meta: { title: '首页', icon: 'el-icon-s-home' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/ItemOne',
    name: 'Example',
    meta: { title: '效果展示', icon: 'el-icon-menu' },
    children: [
      {
        path: 'ItemTwo',
        name: 'ItemTwo',
        component: () => import('@/views/example/ItemTwo/index'),
        meta: { title: '拖拽效果', icon: 'el-icon-s-operation' }
      },
      // {
      //   path: 'ItemThree',
      //   name: 'ItemThree',
      //   component: () => import('@/views/example/ItemThree/index'),
      //   meta: { title: '高德地图', icon: 'el-icon-location-outline' }
      // },
      {
        path: 'ItemFour',
        name: 'ItemFour',
        component: () => import('@/views/example/ItemFour/index'),
        meta: { title: 'ECharts', icon: 'el-icon-pie-chart' }
      },
      {
        path: 'ItemOne',
        name: 'ItemOne',
        component: () => import('@/views/example/ItemOne/index'),
        meta: { title: 'D3效果', icon: 'el-icon-map-location' }
      },
      {
        path: 'ItemFive',
        name: 'ItemFive',
        component: () => import('@/views/example/ItemFive/index'),
        meta: { title: 'svg效果', icon: 'el-icon-magic-stick' }
      }
    ]
  },

  {
    path: '/form',
    name: 'form',
    component: Layout,
    redirect: '/form/index',
    children: [{
      path: 'index',
      component: () => import('@/views/form/index'),
      meta: { title: '表单', icon: 'form' }
    }]
  },

  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
