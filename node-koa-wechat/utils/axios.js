const axios = require('axios')
const baseURL = 'https://api.weixin.qq.com'

const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {}
})

instance.interceptors.request.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error);
  })

instance.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });

module.exports = instance
