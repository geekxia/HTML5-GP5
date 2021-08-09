import { fetchAllCates } from '@/api/good'

const state = {
  cates: []
}

const mutations = {
  UPDATE_CATES: (state, payload) => {
    state.cates = payload
  }
}

const actions = {
  getAllCates({ commit }) {
    // 调接口
    fetchAllCates().then(res => {
      const { list } = res
      commit('UPDATE_CATES', list)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
