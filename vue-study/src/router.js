import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)


// 路由懒加载，是一种Vue项目的性能方案
// 大约的思路：根据url的层级关系，把同一批用到的组件打包在同一个js文件中
// 背后的原理：Vue异步组件 和 Webpack代码分割功能
const Find = ()=>import('./pages/Find.vue')
const FindDetail = ()=>import('./pages/FindDetail.vue')
const User = ()=>import('./pages/User.vue')

import Article from './pages/user/Article.vue'
import Collection from './pages/user/Collection.vue'
import HomeMap from './pages/home/HomeMap.vue'

const routes = [
  // 当url=/home时，路由系统要找到一个名字叫default的视图容器来显示Home，还要找到一个名字叫abc的视图容器来显示Home
  {
    id: 1,
    path: '/home',
    text: '首页',
    isNav: true,
    components: {
      map: HomeMap,
      video: HomeMap,
      echart: HomeMap,
      canvas: HomeMap
    }
  },
  {
    id: 2,
    path: '/find',
    component: Find,
    text: '发现',
    isNav: true
  },
  {
    id: 3,
    path: '/user',
    component: User,
    text: '我的',
    isNav: true,
    // 嵌套视图，一般用到二级嵌套足够了
    // 怎么理解呢？在一级路由所匹配到组件中使用 <router-view> 来显示二级路由所对应的组件
    // 容易被误解的点：path中的斜杠和多级路由没有任何关系
    children: [
      { path: 'article',  component: Article },
      { path: 'collection', component: Collection },
      { path: '/user', redirect: '/user/article' }
    ]
  },
  {
    id: 4,
    // :xx 是动态路由，一般用于列表页跳转到详情页
    // 在详情页如何接受路由路由参数呢？有两种方式：
    // 1、直接使用 this.$route.params.id 来接收
    // 2、使用 props 选项来接收，但要求在路由匹配规则中开启props:true
    path: '/find/detail/:id',
    props: true,
    // 别名一定要以 / 开头，作用是简化path字段，易记
    alias: '/fd',
    // 命名路由：给路由匹配规则加一个名字
    name: 'fd',
    component: FindDetail,
    text: '商品详情',
    isNav: false
  }
]

// 路由实例
const router = new VueRouter({
  // Hash路由和History路由有什么区别？
  // 前者有#，后者没有
  // 实现原理不同，前者是锚点路由（hashchange），后者浏览器路由（popstate）
  // 部署结果不同，前者在部署上线没有任何问题，后者部署上线后会出现404（需要后端服务器做重定向处理）
  mode: 'hash',
  routes: [
    ...routes,
    // 重定向，一般放路由规则的最后一条
    { path: '/*', redirect: '/home' }
  ]
})
export default router
export { routes }
// 在ES6模块，最多只能有一个 export default
// 但，可以有多个 export
