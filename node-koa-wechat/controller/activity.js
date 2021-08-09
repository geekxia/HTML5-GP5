const actModel = require('../model/activity')

class ActivityController {
	static async getActList(ctx) {
		const list = await actModel.find({}).sort({rank:1})
		ctx.body = {
			err: 0,
			msg: 'success',
			data: { list }
		}
	}
}
module.exports = ActivityController
