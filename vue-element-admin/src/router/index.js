import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  // 首页大屏
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: '首页大屏',
        meta: { title: '首页大屏', icon: 'dashboard', affix: true }
      }
    ]
  }
]

// 这些页面都是有权限的（粗粒度的权限管理）
export const asyncRoutes = [
  // 权限管理模块
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: '权限管理',
    meta: {
      title: '权限管理',
      icon: 'lock',
      roles: ['admin'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: '页面管理',
        meta: {
          title: '页面管理',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      }
    ]
  },
  // 商品管理模块
  {
    path: '/goods',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: '商品管理',
    meta: {
      title: '商品管理', // 面包屑
      icon: 'el-icon-s-goods',
      roles: ['shop'] // you can set roles in root nav
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/goods/GoodList'),
        name: '商品列表',
        meta: {
          title: '商品列表',
          roles: ['shop'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'create',
        component: () => import('@/views/goods/GoodForm'),
        name: '商品创建',
        meta: {
          title: '商品创建',
          roles: ['shop'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'edit/:id',
        component: () => import('@/views/goods/GoodForm'),
        name: '商品编辑',
        hidden: true,
        meta: {
          title: '商品编辑',
          roles: ['shop'] // or you can only set roles in sub nav
        }
      }
    ]
  },
  {
    path: '/manage',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: '系统管理',
    meta: {
      title: '系统管理',
      icon: 'lock',
      roles: ['admin'] // you can set roles in root nav
    },
    children: [
      {
        path: 'user',
        component: () => import('@/views/admin/UserManage'),
        name: '用户管理',
        meta: {
          title: '用户管理',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
