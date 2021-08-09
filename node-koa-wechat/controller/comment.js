const jwt = require('../utils/jwt')
const userModel = require('../model/user')
const commentModel = require('../model/comment')
const bookModel = require('../model/book')


class CommentController {
    static async publishComment(ctx) {
        const user = ctx.user
        let { bookid, content } = ctx.request.body

        const userInfo = await userModel.findOne({openid: user.openid})

        const ele = {
            openid: user.openid,
            bookid,
            content,
            avatar: userInfo.avatar,
            nick_name: userInfo.nick_name,
            comment_time: Date.now()
        }
        await commentModel.insertMany([ele])
        ctx.body = {
            err: 0,
            msg: 'success',
            data: {}
        }
    }
    static async publishStar(ctx) {
        const user = ctx.user
        const { bookid } = ctx.request.query
        const userInfo = await userModel.findOne({openid: user.openid})
        const starEle = {
            openid: user.openid,
            avatar: userInfo.avatar,
            nick_name: userInfo.nick_name
        }
        const book = await bookModel.findById(bookid)
        await bookModel.findByIdAndUpdate(bookid, {$set:{star_list:[...book.star_list, starEle]}})
        ctx.body = {
            err: 0,
            msg: 'success',
            data: {}
        }
    }
}

module.exports = CommentController