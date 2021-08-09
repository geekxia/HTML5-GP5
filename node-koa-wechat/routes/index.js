const KoaRouter = require('@koa/router')

const router = new KoaRouter({})
const v = '/api/v1'
// 引入User这个控制器
const U = require('../controller/user')
const A = require('../controller/activity')
const B = require('../controller/book')
const C = require('../controller/comment')

const checkToken = require('../middleware/checkToken')

router
.post(`${v}/user/login`, U.login)
.get(`${v}/getUserList`, U.getUserList)
.get(`${v}/act/list`, A.getActList)
.get(`${v}/book/list`, B.getBookList)
.get(`${v}/listen/list`, B.getListenList)
.get(`${v}/book/detail`, checkToken, B.getBookDetail)
.post(`${v}/publish/comment`, checkToken, C.publishComment)
.get(`${v}/publish/star`, checkToken, C.publishStar)
.get(`${v}/getUserInfo`, checkToken, U.getUserInfo)
.post(`${v}/updateUserInfo`, checkToken, U.updateUserInfo)

module.exports = router
