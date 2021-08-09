import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

// 用token换取用户信息（用户名、头像、手机号、角色信息、菜单信息）

export function getInfo(token) {
  return request({
    url: '/user/getUserInfo',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

export function fetchAddUser(data) {
  return request({
    url: '/role/userAdd',
    method: 'post',
    data
  })
}

export function fetchListUser(params) {
  return request({
    url: '/role/userList',
    method: 'get',
    params
  })
}

export function fetchAllRoles(params) {
  return request({
    url: '/role/list',
    method: 'get',
    params
  })
}

export default {
  login,
  fetchAddUser,
  fetchListUser,
  fetchAllRoles
}
