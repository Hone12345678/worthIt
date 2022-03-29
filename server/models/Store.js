const { Schema, model } = require('mongoose')

const storeSchema = new Schema ({
  name: {
    type: String,
    allowNull: false,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    allowNull: false,
    required: true,
    trim: true,
  }
})

const Store = model('store', storeSchema)

module.exports = Store;