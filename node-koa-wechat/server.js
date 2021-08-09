const Koa = require('koa')
const app = new Koa()
const koaBody = require('koa-body')
const path = require('path')
const router = require('./routes')
require('./utils/connect')

// 静态资源服务
app.use(require('koa-static')(path.resolve(__dirname, 'public')))

// 用于解析body体中的数据
app.use(koaBody())

// 把路由加到中间件中
app.use(router.routes())

app.listen(8888, ()=>{
	console.log('wechat server is running on 8888')
})
