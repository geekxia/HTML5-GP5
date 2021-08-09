const mongoose = require('mongoose')

module.exports = mongoose.model('books', new mongoose.Schema({
	isbn: String,
	author: String,
	img: String,
	book_name: String,
	recommended_value: Number,
	label: String,
	cate: String,
	desc: String,
	read_online: Number,
	status: { type: Number, default: 0 },
	publish_time: Number,
	tell: String,
	audio_src: String,
	star_list: { type: Array, default: [] }
}))
