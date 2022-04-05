const router = require("express").Router()
const { getUsers, createUser, getUser, editUser, addCar, removeCar, loginUser, removeUser } = require("../../controller/userController")
const jwt = require("jsonwebtoken");
const passport = require("passport");
const config = require("../../config/database");
const { User } = require("../../models");

genToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      sub: user.id,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1),
    },
    config.jwt_secret
  );
};

router.get(
  "/secret",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.status(200).json("Secret Data");
  }
);

router.route("/login")
	.post(loginUser)

router.route("/")
	.get(getUsers)
	.post(createUser)

router.route("/:userId")
	.get(getUser)
	.put(editUser)
	.delete(removeUser)

router.route("/:userId/car")
	.put(addCar)

router.route("/:userId/car/:carId")
	.put(removeCar)	

module.exports = router