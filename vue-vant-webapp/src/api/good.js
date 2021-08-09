import axios from '@/utils/axios'

// 商品列表（首页、发现）
// 入参：{ size, page, cate, hot }
export const fetchGoodList = params => axios({
  url: '/good/list',
  method: 'GET',
  params
})

// 获取品类列表
// 入参：{}
const fetchCates = params => axios({
  url: '/good/cates',
  method: 'GET',
  params
})

// 获取商品详情
// 入参：{ id }
const fetchGoodDetail = params => axios({
  url: '/good/detail',
  method: 'GET',
  params
})

// 入参：num, good_id
const fetchAddToCart = data => axios({
  url: '/cart/add',
  method: 'POST',
  data
})

// 购物车商品列表
const fetchCartList = params => axios({
  url: '/cart/list',
  method: 'GET',
  params
})

// 删除商品
// 入参 { id }
const fetchCartDel = params => axios({
  url: '/cart/del',
  method: 'GET',
  params
})

// 更新购物车商品数据
// 入参 { id, num }
const fetchCartUpdate = params => axios({
  url: '/cart/update',
  method: 'GET',
  params
})

// 提交购物车
// 入参： { goods }  是购物车列表项_id组件成的字符串
const fetchCartSubmit = data => axios({
  url: '/cart/pay',
  method: 'POST',
  data
})

export default {
  fetchGoodList,
  fetchCates,
  fetchAddToCart,
  fetchGoodDetail,
  fetchCartList,
  fetchCartDel,
  fetchCartUpdate,
  fetchCartSubmit
}
