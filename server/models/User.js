const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

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
  },
  speed: {
    type: Number,
    trim: true
  },
  gasPrice: {
    type: Number,
    trim: true
  },
  car: [carSchema],
  gigs: [gigsSchema]
})



userSchema.pre("save", function (next) {
  const user = this;
  if (this.isModified("password") || this.isNew) {
    console.log('pre')
    bcrypt.genSalt(10, function (err, salt) {
      console.log('start salting');
      if (err) {
        console.log('genSalt user model', err);
        return next(err);
      }
      bcrypt.hash(user.password, salt, function (err, hash) {
        console.log('start hashing')
        if (err) {
          console.log('hash user model', err);
          return next(err);
        }
        user.password = hash;
        console.log(user.password)
        return next();
      });
    });
  } else {
    return next();
  }
});

userSchema.methods.comparePassword = function (passw, cb) {
  bcrypt.compare(passw, this.password, function (err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

const User = model('user', userSchema)

module.exports = User;