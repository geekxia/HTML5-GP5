const mongoose = require('mongoose')

module.exports = mongoose.model('comments', new mongoose.Schema({
    openid: String,
    bookid: String,
    content: String,
    comment_time: Number,
    avatar: String,
    nick_name: String,
    star_num: { type: Number, default: 0 }
}))
