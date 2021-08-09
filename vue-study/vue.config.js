// 什么是跨域？只要是协议、域名、端口，只有一个不相同就是跨域
// 什么同源策略？只有浏览器中才有，限制ajax跨域请求

// 怎么解决跨域？
// 1、让前后端代码都跑在同个域上
// 2、通过代理的方式，绕过CORS同源策略

module.exports = {
  devServer: {
    proxy: {
      '/soso': {
        target: 'https://c.y.qq.com',    // 远程服务器
        changeOrigin: true
      }
    }
  }
}
