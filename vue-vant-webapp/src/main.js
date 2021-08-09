import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 按需导入组件，是一种性能优化方案
import {
  Button,
  Cell,
  CellGroup,
  Tabbar,
  TabbarItem,
  NoticeBar,
  Swipe,
  SwipeItem,
  Search,
  Lazyload,
  List,
  PullRefresh,
  Sidebar,
  SidebarItem,
  Grid,
  GridItem,
  SwipeCell,
  Card,
  Checkbox,
  Col,
  Row,
  SubmitBar,
  NavBar,
  Icon,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Form,
  Field,
  Dialog,
  AddressList,
  AddressEdit
} from 'vant'
Vue.use(Button)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NoticeBar)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Search)
Vue.use(Lazyload)
Vue.use(List)
Vue.use(PullRefresh)
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(SwipeCell)
Vue.use(Card)
Vue.use(Checkbox)
Vue.use(Col)
Vue.use(Row)
Vue.use(SubmitBar)
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(GoodsAction)
Vue.use(GoodsActionIcon)
Vue.use(GoodsActionButton)
Vue.use(Form)
Vue.use(Field)
Vue.use(Dialog)
Vue.use(AddressList)
Vue.use(AddressEdit)



import router from './router'
import store from './store/'

import img from '@/utils/img'
Vue.prototype.$img = img
import api from '@/api'
Vue.prototype.$api = api
import verify from '@/utils/verify'
Vue.prototype.$verify = verify
import dialog from '@/utils/dialog'
Vue.prototype.$dialog = dialog

Vue.filter('rmb', val=>{
  return (val ? '￥'+val : '')
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
