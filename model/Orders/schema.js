const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = new Schema({
  userName: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
  },
  userEmail: {
    type: String,
    minLength: 4,
    maxLength: 30,
    required: true,
  },
  userPhone: {
    type: String,
    minLength: 1,
    maxLength: 20,
    required: true,
  },
  userAdress: {
    type: String,
    minLength: 4,
    maxLength: 50,
    required: true,
  },
  items: [
    {
      name: {
        type: String,
        minLength: 2,
        maxLength: 30,
        required: true
      },
      price: {
        type: Number,
        min: 0,
        minLength: 1,
        maxLength: 10,
        required: true
      },
      quantity: {
        type: Number,
        min: 0,
        required: true
      },
      currency: {
        type: String,
        minLength: 1,
        maxLength: 10,
        required: true
      }
    }, 
  ],
  totalPrice: {
    type: Number,
    min: 0,
    required: true,
  },
  currency: {
    type: String,
      minLength: 1,
      maxLength: 10,
      required: true
  }
}, { timestamps: true });