import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from '@/views'

const router = new VueRouter({
  // mode: 'hash',
  mode: 'history',
  routes: [
    ...routes,
    { path: '/*', redirect: '/home' }
  ]
})

// 全局路由守卫：每次路由匹配之前
router.beforeEach((to,from,next)=>{
  // console.log('to', to)
  // console.log('from', from)
  // 对有权限的页面来讲，我们需要进一步判断是否登录了
  // 使用路由元信息：
  if(to.meta.isAuth) {
    // 如果没有登录，不让过，next('/login')
    // 如果已登录，直接 next()
    const token = localStorage.getItem('token')
    if(token) next()
    if(!token) next('/login')
  }
  next()
})
export default router

// 定义一组有权限的页面
// const pages = ['/cart', '/user']
// if(pages.includes(to.path) {
//   // 如果你访问的页面是权限页面，我们进行登录条件判断
//   const isLogin = localStorage.getItem('token')
//   if(isLogin) {
//     next()
//   }else{
//     next('/login')
//   }
// }else{
//   next()
// }
