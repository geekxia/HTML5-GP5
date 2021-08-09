import Vue from 'vue'
// JS组件
import { Dialog } from 'vant'
Vue.use(Dialog)

const confirm = options => {
  return Dialog.confirm({
    title: options.title,
    message: options.message,
  })
}

const alert = options => {
  return Dialog.alert({
    title: options.title,
    message: options.message,
  })
}

export default {
  confirm,
  alert
}
