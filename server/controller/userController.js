const { User } = require("../models")

const userController = {
	loginUser: async function (req, res, next) {
		try {
			User.findOne(
				{
					username: req.body.username,
				},
				function (err, user) {
					if (err) throw err;
	
					if (!user) {
						res.status(401).json({
							success: false,
							msg: "Unable to authenticate.",
						});
					} else {
						user.comparePassword(req.body.password, function (err, isMatch) {
							if (isMatch && !err) {
								var token = genToken(user.toJSON());
	
								res.status(200).json({ success: true, token: token });
							} else {
								res.status(401).json({
									success: false,
									msg: "Unable to authenticate.",
								});
							}
						});
					}
				}
			);
		} catch (err) {
			return res.status(500).json(err);
		}
	},

	getUsers: async function (req, res) {
		try {
			const userData = await User.find()
			res.json(userData)
		} catch (error) {
			res.status(500).json(error)
		}
	},
	createUser: async function (req, res, next) {
    console.log('createUser base')
		try {
      console.log("this is the req")
			if (!req.body.username || !req.body.password) {
				res.status(400).json({ success: false, msg: "Please pass username and password." });
			} else {
        var newUser = new User({
          username: req.body.username,
          email: req.body.email,
					password: req.body.password,
				});
        console.log('createUser new user')
	
				newUser.save(function (err) {
          console.log("I made it to line 62")
					if (err) {
            console.log(err)
						return res.status(400).json({ success: false, msg: "Username already exists." });
					}
					var token = genToken(newUser.toJSON());
          console.log('token', token)
					res.status(200).json({ success: true, token: token });
				});
			}
		} catch (err) {
			return res.status(500).json(err);
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
	},


	
}


module.exports = userController