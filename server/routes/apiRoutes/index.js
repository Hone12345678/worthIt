const router = require("express").Router()
const userRoutes = require("./userRoutes")
const storeRoutes = require("./storeRoutes")

router.use("/stores", storeRoutes)
router.use("/users", userRoutes)

module.exports = router