const { Schema, model } = require('mongoose')
// const bcrypt = require('bcrypt')

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
  mpg: {
    type: Number,
    allowNull: false,
    required: true,
    trim: true
  }
},
{
  toJSON: {
    getters: true
  }
}
)

const userSchema = new Schema ({
  username: {
    type: String,
    allowNull: true,
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

// // set up pre-save middleware to create password
// userSchema.pre('save', async function(next) {
//   if (this.isNew || this.isModified('password')) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }

//   next();
// });

// // compare the incoming password with the hashed password
// userSchema.methods.isCorrectPassword = async function(password) {
//   return bcrypt.compare(password, this.password);
// };

const User = model('user', userSchema)

module.exports = User;