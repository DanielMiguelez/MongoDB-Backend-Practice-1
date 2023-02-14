const express = require("express")
const router = express.Router()
const OrderController = require("../controllers/OrderController")
const { authentication, isAuthor } = require("../middlewares/authentication");

router.post("/createOrder",authentication, OrderController.create)//
router.get("/getAllOrders",  OrderController.getAllOrders)
router.put("/updateOrderById/:_id",authentication, isAuthor,  OrderController.update)
router.delete("/deleteOrderById/:_id",authentication, isAuthor,  OrderController.deleteOrder)


module.exports = router