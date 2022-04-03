// user schema

const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

// gig
const gigsSchema = new Schema({
  name: {
    type: String,
    allowNull: false,
    required: true,
    trim: true,
    unique: true
  }
}
)

// car
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

// user
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


// password encryption
userSchema.pre("save", function (next) {
  const user = this;
  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
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