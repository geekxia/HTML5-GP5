var express = require('express');
var router = express.Router();
var goodModel = require('../model/good/goodModel')
var cateModel = require('../model/good/cateModel')

// 描述：获取商品列表
// GET  /list
// 入参：{ page, size, hot, cate, rank, star, name, min_price, max_price }
router.get('/list', (req, res)=>{
  let { page, size, hot, cate, rank, star, name, min_price, max_price } = req.query
  // 验证必填参数
  // 非必填参数处理
  page = parseInt(page || 1)
  size = parseInt(size || 10)
  hot = hot || false
  cate = cate || ''
  rank = rank || false
  star = star || false
  name = name || ''
  min_price = Number(min_price || 0)
  max_price = Number(max_price || Infinity)
  const params = {
    name: new RegExp(name),
    hot,
    cate,
    price: { $gte: min_price, $lte: max_price }
  }
  const sort = {
    rank: rank,
    star: star,
    create_time: -1
  }
  // 多条件查询
  if(!params.hot) delete params.hot
  if(!params.cate) delete params.cate
  // 排序
  if(!rank) delete sort.rank
  if(!star) delete sort.star
  console.log('params', params)
  console.log('sort', sort)
  goodModel.find(params).count().then(total=>{
    goodModel.find(params)
    .limit(size)
    .skip((page-1)*size)
    .sort(sort)
    .then(list=>{
      res.json({err:0,msg:'success',data:{list, total}})
    })
  })
})

// 描述：根据_id查询商品完整详情
router.get('/detail', (req, res)=>{
  let { id } = req.query
  if(!id) return res.json({err: 1, msg:'id是必填'})
  goodModel.findById(id).then(doc=>{
    // console.log()
    res.json({err:0, msg:'success', data: doc})
  })
})


// 描述：获取所有品类
// GET  /cates
// 入参： {}
router.get('/cates', (req,res)=>{
  cateModel.find().then(list=>{
    res.json({err:0,msg:'succuess', data: {list}})
  })
})


// 描述：删除商品
// POST  /del
// 入参  { ids }
router.post('/del', (req,res)=>{
  let { ids } = req.body
  if(!ids) return res.json({err:1,msg:'ids是必填字段'})
  const arr = ids.split(';').filter(ele=>ele)
  let count = 0
  arr.map(ele=>{
    goodModel.deleteOne({_id: ele}).then(()=>{
      count++
      if(count===arr.length) {
        res.json({err:0,msg:'success'})
      }
    })
  })
})

// 商品新增
router.post('/addOrEdit', (req,res)=>{
  let { id, name, desc, price, cate, rank, hot, img } = req.body
  let ele = {
    name,
    desc,
    price: Number(price),
    cate,
    rank: Number(rank),
    hot: Boolean(hot),
    img
  }
  if(id) {
    // 编辑
    goodModel.updateOne({_id:id}, {$set:ele}).then(doc=>{
      res.json({err:0,msg:'success',data:{info:doc}})
    })
  }else{
    // 新增
    goodModel.insertMany([ele]).then(doc=>{
      res.json({err:0,msg:'success',data:{info:doc}})
    })
  }
})

module.exports = router;
