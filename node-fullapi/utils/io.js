var io = require('socket.io-client')

var socket = io('http://10.36.138.28:9999')

socket.on('connect', ()=>{
    console.log('我连接上了socket服务')
})

socket.on('node', msg=>{
    console.log('我收到一条消息：', msg)
})

module.exports = socket