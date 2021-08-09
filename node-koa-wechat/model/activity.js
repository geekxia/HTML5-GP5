const mongoose = require('mongoose')

module.exports = mongoose.model('activities', new mongoose.Schema({
	banner: String,
  title: String,
  start_time: Number,
  end_time: Number,
  no: Number,
  status: { type: Number, default: 0 },
	rank: Number
}))
