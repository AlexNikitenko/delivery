const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = new Schema({
  name: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
  },
}, { timestamps: true });