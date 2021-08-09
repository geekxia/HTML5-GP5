const Home = ()=>import('./home/Home.vue')
const Find = ()=>import('./find/Find.vue')
const Cart = ()=>import('./cart/Cart.vue')
const User = ()=>import('./user/User.vue')
const GoodDetail = ()=>import('./home/GoodDetail.vue')
const Login = ()=>import('./user/Login.vue')
const Regist = ()=>import('./user/Regist.vue')
const Addr = ()=>import('./user/Addr.vue')
const AddrDetail = ()=>import('./user/AddrDetail.vue')

export default [
  { path: '/home', components: { alive: Home } },
  { path: '/find', components: { alive: Find } },
  { path: '/cart', component:Cart, meta: {isAuth: true} },
  { path: '/user', components: { alive: User }, meta: {isAuth: true} },
  { path: '/good/detail/:id', component: GoodDetail },
  { path: '/login', component: Login },
  { path: '/regist', component: Regist },
  { path: '/user/addr', component: Addr },
  { path: '/user/addr/:id', component: AddrDetail }
]
