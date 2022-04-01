require("dotenv").config();

module.exports = {
  jwt_secret: process.env.SECRET,
  database: process.env.MONGODB_URI,
};