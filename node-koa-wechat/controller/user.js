const axios = require('../utils/axios')
const jwt = require('../utils/jwt')
// 引入model
const userModel = require('../model/user')

class UserController {
	// 登录接口
	static async login(ctx) {
		// 接收入参
		console.log('post body', ctx.request.body)
		let { code } = ctx.request.body
		console.log('code', code)
		// 第1步，用code+appid+secret换取微信服务器的openid+session-key
		const res = await axios({
			url: '/sns/jscode2session',
			method: 'get',
			params: {
				appid: 'wx2f8b38986e5e2ccf',
				secret: '345bc1b9ae74bbf28146e31bcbff372e',
				js_code: code,
				grant_type: 'authorization_code'
			}
		})
		// 第2步，openid不能重复入库		
		const list = await userModel.find({openid: res.openid})		
		if(list.length > 0) {
			const token = jwt.createToken(res)
			ctx.body = {
				err: 0,
				msg: 'success',
				data: { token }
			}
		}else{
			const ele = {
				openid: res.openid,
			}
			await userModel.insertMany([ele])
			const token = jwt.createToken(res)
			ctx.body = {
				err: 0,
				msg: 'success',
				data: { token }
			}
		}
	}

	static async getUserList(ctx) {
		const list = await userModel.find({})
		ctx.body = {
			err: 0,
			msg: 'success',
			data: {list}
		}
	}

	static async getUserInfo(ctx) {
		const user = ctx.user
		const userInfo = await userModel.findOne({openid: user.openid})
		ctx.body = {
			err: 0,
			msg: 'success',
			data: {
				userInfo
			}
		}
	}

	static async updateUserInfo(ctx) {
		const user = ctx.user
		const { avatar, nick_name } = ctx.request.body
		await userModel.updateOne({openid: user.openid}, {$set:{avatar,nick_name}})
		ctx.body = {
			err: 0,
			msg: 'success',
			data: {}
		}
	}
}

module.exports = UserController
