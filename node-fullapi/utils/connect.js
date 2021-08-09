const mongoose = require('mongoose');
// 指定生产环境下要连接的数据库 node
mongoose.connect('mongodb://localhost:27017/node', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection
db.once('open', ()=>{
  console.log('数据库连接成功')
})
db.on('error', ()=>{
  console.log('数据库连接失败')
})
