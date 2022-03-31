const { User } = require("../models")

const userController = {
	getUsers: async function (req, res) {
		try {
			const userData = await User.find()
			res.json(userData)
		} catch (error) {
			res.status(500).json(error)
		}
	},
	createUser: async function ({body}, res) {
		try {
			const userData = await User.create(body)
			res.json(userData)
		} catch (error) {
			res.status(500).json(error)
		}

	},
	getUser: async function ({params}, res) {
		try {
			const userData = await User.findById(params.userId)
			res.json(userData)
		} catch (error) {
			res.status(500).json(error)
		}
	},

	editUser: async function ( {params, body}, res) {
		try {
			const userData = await User.findByIdAndUpdate(
				{_id: params.userId},
				{
					username: body.username, 
					email: body.email,
					pay: body.pay
				},
				{new: true}
				)
			res.json(userData)
		} catch (error) {
			res.status(500).json(error)
		}
	},

	addCar: async function ({params, body}, res) {
		try {
			const userData = await User.findOneAndUpdate(
				{_id: params.userId},
				{ $push: { car: body } },
				{new: true}
				)
				res.json(userData)
		} catch (error) {
			res.status(500).json(error)
		}
	},

	addGig: async function ({params, body}, res) {
		try {
			const userData = await User.findOneAndUpdate(
				{_id: params.userId},
				{$push: { gigs: body } },
				{new: true}
			)
			res.json(userData)
		} catch (error) {
			res.status(500).json(error)
		}
	}

}


module.exports = userController