var express = require('express')
var router = express.Router()
var userModel = require('../model/user/userModel')
var roleModel = require('../model/user/roleModel')

router.post('/userAdd', (req,res)=>{
    let { username, role } = req.body
    let ele = {
        username,
        role,
        password: 123456
    }
    roleModel.findOne({role}).then(doc=>{
        ele.role_name = doc.roleName
        userModel.insertMany([ele]).then(doc=>{
            res.json({err:0,msg:'success',data:{info:doc}})
        })
    })    
})

router.get('/userList', (req,res)=>{
    userModel.find({role:{$exists:true}}).then(list=>{
        res.json({err:0,msg:'success',data:{list}})
    })
})

router.get('/list', (req, res)=>{
    roleModel.find().then(list=>{
        res.json({err:0,msg:'success',data: {list}})
    })
})

module.exports = router