var express = require('express');
var router = express.Router();
var userModel = require('../model/user/userModel')
var http = require('../utils/http')
var jwt = require('../utils/jwt')
var addrModel = require('../model/user/addrModel')

// 描述：用于请求用户列表
// GET /user/list
// 入参：{ page, size, name }
// 出参：{ total, list }
router.get('/list', function(req, res, next) {
  let { page, size, name } = req.params
  // console.log('req.query', req.query)
  // 验证必填参数
  // if(!name) return res.status(401).json({err:1,msg:'name是必填参数'})
  // 非必填参数，要给定默认值
  page = parseInt(page||1)
  size = parseInt(size||2)
  name = name || ''

  userModel.find({username:/name/})
    .skip((page-1)*size)
    .limit(size)
    .then(list=>{
      res.json({err:0,msg:'success', list})
    })
})

// 描述：使用用户名来注册
// POST  /regist
// 入参：{ username, password }
// 出参：{ username }
router.post('/regist', (req, res)=>{
  let { type, username, password } = req.body
  // 必填参数验证
  if(!username || !/^[a-zA-Z][a-zA-Z0-9\~\!\@]{3,9}$/.test(username)) {
    return res.json({err:1,msg:'用户名无效'})
  }
  if(!password) return res.json({err:1,msg:'password是必填参数'})
  // 业务验证
  // 1、用户名不能重复
  userModel.find({username})
    .then(docs=>{
      if(docs.length>0) {
        res.json({err:1,msg:'该用户名已被占用'})
      } else {
        var ele = {
          username,
          password,
          create_time: Date.now()
        }
        // 2、用户注册入库
        userModel.insertMany([ele])
          .then((doc)=>{
            res.json({err:0,msg:'success',data:{username}})
          })
      }
    })
})

// 描述：使用邮箱注册
router.post('/regist/email', (req, res)=>{
  res.json({err: 0, msg: 'success'})
})

// 描述：用户登录
// POST  /login
// 入参： { password, password }
// 出参： { token }
router.post('/login', (req, res)=>{
  let { username, password } = req.body
  if(!username) return res.json({err:1,msg:'username是必填参数'})
  if(!password) return res.json({err:1,msg:'password是必填参数'})
  // 验证必填参数
  userModel.find({username, password})
    .then(docs=>{
      // 当用户登录成功，服务器要给客户端一个登录成功的标识
      // token是现在主流的用户鉴权解决方案，弥补HTTP无状态的缺陷
      if(docs.length===1) {
        res.json({err: 0, msg: 'success', data: {
          // 把用户_id保存到token中去
          token: jwt.createToken({username,password,_id:docs[0]._id})
        }})
      }else{
        res.json({err: 2, msg: '用户名和密码不匹配'})
      }
    })
})


// 描述：地址新增
// POST  /addr/add
// 入参：{receiver,addr,mobile,primary}
router.post('/addr/add', (req,res)=>{
  jwt.verifyToken(req,res).then(user=>{
    let { receiver, addr, mobile, primary} = req.body
    primary = primary || false
    const ele = {
      receiver,
      addr,
      mobile,
      primary,
      user_id: user._id
    }
    addrModel.insertMany([ele]).then(()=>{
      res.json({err:0,msg:'success'})
    })
  })
})

// 描述：获取当前的地址列表
// GET  /addr/list
// 入参：{ page, size }
router.get('/addr/list', (req, res)=>{
  jwt.verifyToken(req,res).then(user=>{
    addrModel.find({user_id: user._id}).then(list=>{
      res.json({err:0,msg:'success',data:{list}})
    })
  })
})

// 描述：修改默认地址
// GET  /addr/default
// 入参：{ addr_id }
router.get('/addr/default', (req, res)=>{
  jwt.verifyToken(req, res).then(user=>{
    let { addr_id } = req.query
    addrModel.updateMany({user_id: user._id}, {$set:{primary:false}})
      .then(()=>{
        addrModel.updateOne({_id: addr_id}, {$set:{primary:true}})
          .then(()=>{
            res.json({err:0,msg:'success'})
          })
      })
  })
})

router.get('/getUserInfo', (req, res)=>{
  jwt.verifyToken(req,res).then(user=>{
    console.log('user', user)
    userModel.findOne({_id: user._id}).then(doc=>{
      const data = {
        roles: [doc.role],
        name: doc.username,
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        introduction: doc.role_name
      }
      res.json({err:0,msg:'success', data: { data }})
    })
  })
})

module.exports = router;
