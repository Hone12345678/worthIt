const { Schema, model } = require('mongoose')

const userSchema = new Schema ({
  username: {
    type: String,
    allowNull: false,
    required: true,
    unique: true,
    trim: true,
    maxLength: 20
  },
  email: {
    type: String,
    allowNull: false,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    allowNull: false,
    trim: true,
    required: true,
    minLength: 8
  },
  pay: {
    type: Number,
    allowNull: false,
    trim: true,
    required: true
  },
  timeShopping: {
    type: Number,
    allowNull: false,
    trim: true,
    required: true
  }
})

const User = model('user', userSchema)

module.exports = User;