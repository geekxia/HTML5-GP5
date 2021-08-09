import { fetchGoodList } from '@/api/good'

export default {
  namespaced: true,
  state: {
    msg: 'hello good',
    cache: {}
  },
  mutations: {
    updateCache(state, payload) {
      // payload = { k: 1, list: [] }
      state.cache[payload.k] = payload.list
      // 解决引用数据类型变化了、但页面不更新的问题
      state.cache = JSON.parse(JSON.stringify(state.cache))
    },
    clearCache(state){
      state.cache = {}
    }
  },
  actions: {
    // 封装一个actions方法，用于和后端api打交道
    getGoodsOfCate(store, payload) {
      const params = {
        cate: payload.cate
      }
      fetchGoodList(params).then(res=>{
        // 当拿到后端数据时，交给mutations，更新state
        store.commit('updateCache', {k: payload.k, list: res.list})
      })
    }
  }
}
