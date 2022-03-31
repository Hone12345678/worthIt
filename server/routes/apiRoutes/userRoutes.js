const router = require("express").Router()
const { getUsers, createUser, getUser, editUser, addCar, addGig } = require("../../controller/userController")


router.route("/")
	.get(getUsers)
	.post(createUser)

router.route("/:userId")
	.get(getUser)
	.put(editUser)
	// .delete(deleteUser)

router.route("/:userId/car")
	.put(addCar)
	// .delete(removeCar)	

router.route("/:userId/gig")
	.put(addGig)	
	// .delete(removeGig)

module.exports = router