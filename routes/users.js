const express = require("express")
const router = express.Router()
const UserController = require ("../controllers/UserController")
const { authentication } = require("../middlewares/authentication")

router.post("/createUser", UserController.createUser)
router.post("/login", UserController.login)
router.delete("/logout",authentication, UserController.logout)
router.get("/getInfo",authentication, UserController.getInfo)
router.get("/getAllUsers", UserController.getAllUsers)

module.exports = router