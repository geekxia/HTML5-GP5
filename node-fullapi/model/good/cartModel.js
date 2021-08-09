const mongoose = require('mongoose')

module.exports = mongoose.model('carts', new mongoose.Schema({
  good_id: mongoose.Schema.Types.ObjectId,
  num: Number,
  create_time: { type: Number, default: Date.now() },
  user_id: mongoose.Schema.Types.ObjectId,
  status: { type: Number, default: 1 }
}))
