const mongoose = require('mongoose')

module.exports = mongoose.model('users', new mongoose.Schema({
  openid: String,
	mobile: { type: String, default: '' },
	nick_name: { type: String, default: '' },
	avatar: { type: String, default: '' },
	create_time: { type: Number, default: Date.now() }
}))
