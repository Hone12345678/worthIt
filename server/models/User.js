const { Schema, model } = require('mongoose')

const gigsSchema = new Schema({
  name: {
    type: String,
    allowNull: false,
    required: true,
    trim: true
  }
})

const carSchema = new Schema({
  car: {
    type: String,
    allowNull: false,
    required: true,
    trim: true
  },
  mph: {
    type: Number,
    allowNull: false,
    required: true,
    trim: true
  }
})

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
  car: [carSchema],
  gigs: [gigsSchema]
})

const User = model('user', userSchema)

module.exports = User;