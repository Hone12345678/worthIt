const { Store } = require("../models")

const storeController = {
	getStores: async function (req, res) {
		try {
			const storeData = await Store.find()
			res.json(storeData)
		} catch (error) {
			res.status(500).json(error)
		}
	},
	createStore: async function (req, res) {
		try {
			const storeData = await Store.create(req.body)
			res.json(storeData)
		} catch (error) {
			res.status(500).json(error)
		}

	},
	getStore: async function (req, res) {
		try {
			const storeData = await Store.findById(req.params.storeId)
			res.json(storeData)
		} catch (error) {
			res.status(500).json(error)
		}
	}

}

module.exports = storeController