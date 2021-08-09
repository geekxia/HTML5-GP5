import { fetchQqList } from '@/utils/api'

export default {
  namespaced: true,
  state: {
    list: []
  },
  getters: {},
  mutations: {
    updateList(state, payload) {
      state.list = payload
    }
  },
  actions: {
    emitGetMusicList(store, payload) {
      // 真正调接口
      fetchQqList(payload).then(res=>{
        console.log('音乐列表', res)
        store.commit('updateList', res.song.list)
      })
    }
  }
}
