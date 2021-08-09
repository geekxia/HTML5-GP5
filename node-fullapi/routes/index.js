var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = {
    title: 'Hello GP5',
    idx: 1,
    arr: [
      { id: 1, name: 'lisi', age: 20, tag: '<a href="">我的主页</a>' },
      { id: 2, name: 'wangwu', age: 30, tag: '<a href="">我的主页</a>' }
    ]

  }
  res.render('index', data);
})

router.get('/about', (req, res)=>{
  res.render('about', { idx: 3, title: '我的' })
})

module.exports = router;
