const router = require("express").Router()
const { getStores, createStore, getStore } = require("../../controller/storeController")


router.route("/")
	.get(getStores)
	.post(createStore)

router.route("/:storeId")
	.get(getStore)
	.put()


module.exports = router