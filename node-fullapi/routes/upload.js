var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path')

// 用于处理非表单的文件数据流
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var cpUpload = upload.fields([{ name: 'xxx', maxCount: 1 }])


// 描述：用于图片上传
// POST  /upload/img
// 入参  { xxx }
// 普通表单提交，浏览器会对数据进行默认编码
// 文件上传，默认不进行任何编码，直接使用二进制数据流进行传输
router.post('/img', cpUpload, (req, res)=>{
    // 服务器已经接受到了前端传递过来的图片数据，现在它保存在哪里呢？
    // 保存服务进程的临时存储空间
    const img = req.files.xxx[0]
    console.log('files',req.files.xxx[0])
    // 使用fs模块把临时存储空间中的图片，写到服务器硬盘上
    var readStream = fs.createReadStream(img.path)
    var imgPath = `/cdn/${Date.now()}-${img.originalname}`
    var writeStream = fs.createWriteStream(path.resolve(__dirname,`../public${imgPath}`))
    // 管道流
    readStream.pipe(writeStream)
    // 监听管道流的关闭事件
    writeStream.on('close', ()=>{
        console.log('图片上传成功')
        // 把图片在服务器上的访问地址，返回给客户端
        res.json({err:0,msg:'success',data: {img: imgPath}})
    })
})

module.exports = router;
