const express = require("express")
const router = express.Router()
const OrderController = require("../controllers/OrderController")
const { authentication } = require("../middlewares/authentication");

router.post("/createOrder",authentication, OrderController.create)
router.put("/updateOrderById/:_id",authentication, OrderController.update)



module.exports = router