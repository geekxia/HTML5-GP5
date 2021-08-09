const boodModel = require('../model/book')
const commentModel = require('../model/comment')

class BookController {
	// 获取图书列表
	static async getBookList(ctx) {
		// GET请求，从 request.query取参数
		let { page, cate, size } = ctx.request.query
		let params = {
			cate: cate || ''
		}
		if(!params.cate) delete params.cate
		page = parseInt(page||1)
		size = parseInt(size||10)
		const total = await boodModel.find(params).count()
		const list = await boodModel.find(params).limit(size).skip((page-1)*size).sort({start:1})
		ctx.body = {
			err: 0,
			msg: 'success',
			data: { total, list }
		}
	}
	// 获取听书列表
	static async getListenList(ctx) {
		// GET请求，从 request.query取参数
		// let { listen_type } = ctx.request.query
		const params = {}
		const list = await boodModel.find(params).exists('tell',true)
		ctx.body = {
			err: 0,
			msg: 'success',
			data: { list }
		}
	}
	// 获取详情
	static async getBookDetail(ctx) {
		const user = ctx.user
		let { bookid } = ctx.request.query
		const book = await boodModel.findById(bookid)
		const commentList = await commentModel.find({bookid}).sort({comment_time:-1})
		const starEle = book.star_list.find(ele=>ele.openid===user.openid)
		const book2 = JSON.parse(JSON.stringify(book))
		book2.is_star = starEle ? true : false
		ctx.body = {
			err: 0,
			msg: 'success',
			data: {
				book: book2,
				commentList
			}
		}
	}
}

module.exports = BookController
