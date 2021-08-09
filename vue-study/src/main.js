import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router.js'
import store from './store/index.js'

import api from './utils/api'
Vue.prototype.$api = api

// vue响应式系统
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
