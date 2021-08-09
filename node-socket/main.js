//  websocket
// 1、WebSocket是H5新增的实时通信解决方案，兼容性较差
// 2、它是一种长连接，一旦连接上不会断开
// 3、socket客户端和socket服务端之间可以彼此主动发送消息
// 4、封装socket连接服务时，需要注意的点是：捕获断开事件、重新连接。


const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  // 跨域问题处理选项
  cors: {
    origin: "http://10.36.138.28:8002",  // 你
    methods: ["GET", "POST"]
  }
});

// 有人连接我时，触发
io.on("connection", (socket) => {
    console.log('有人连接我成功了')
    io.emit('node', 'hello node 8888')
    // 监听8888的消息
    socket.on('server', msg=>{
      // 接收8888服务器发来的消息
      // 再将消息处理发送给商家端
      console.log('来自8888的消息', msg)
      io.emit('shop', msg)
    })
});

httpServer.listen(9999, ()=>{
    console.log('启动一台socket服务')
})