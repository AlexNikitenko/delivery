const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = new Schema({
  shopId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Store'
  },
  name: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
}, { timestamps: true });