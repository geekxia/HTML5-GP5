import axios from 'axios'
import dialog from './dialog'

const baseURL = 'http://m.3fengs.com'
const version = '/api/v1'

// 创建axios实例
const instance = axios.create({
  baseURL: baseURL + version,
  timeout: 7000,
  headers: {}
})

// 封装请求拦截器
instance.interceptors.request.use(function (config) {
  // 对config进行二次处理、添加公共的config
  // 一般在这里统一加token
  // console.log('请求拦截器', config)
  // 用户鉴权
  config.headers.Authorization = localStorage.getItem('token')
  return config
}, function (error) {
  return Promise.reject(error)
})

// 封装响应拦截器
instance.interceptors.response.use(function (response) {
  // 根据HTTP状态码来判断请求成功与否
  // 根据业务状态码来判断业务成功与否
  // 数据过滤
  let res = null
  if (response.status === 200) {
    const data = response.data
    switch (data.err) {
      case 0:
        res = data.data
        break
      case -1:
        // 当err=-1表示token，立即跳出当前前面，去到登录页
        window.location.href = '#/login'
        break
      default:
        dialog.alert({
          title: '错误',
          message: data.msg,
        })
    }
  }else{
    dialog.alert({
      title: '错误',
      message: '网络异常，稍后再试',
    })
  }
  // console.log('响应拦截器', response)
  return res
}, function (error) {
  return Promise.reject(error)
})

export default instance
