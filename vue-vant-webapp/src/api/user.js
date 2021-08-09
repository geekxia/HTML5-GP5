import axios from '@/utils/axios'

// axios的POST，用data属性作为入参

// 入参：{ username, password }
const fetchLogin = data => axios({
  url: '/user/login',
  method: 'POST',
  data
})

// 入参：{ username, password, password2 }
const fetchRegist = data => axios({
  url: '/user/regist',
  method: 'POST',
  data
})


const fetchAddrList = params => axios({
  url: '/user/addr/list',
  method: 'GET',
  params
})

const fetchAddrAdd = data => axios({
  url: '/user/addr/add',
  method: 'POST',
  data
})

const fetchUpdDefAddr = params => axios({
  url: '/user/addr/default',
  method: 'GET',
  params
})

export default {
  fetchLogin,
  fetchRegist,
  fetchAddrList,
  fetchAddrAdd,
  fetchUpdDefAddr
}
