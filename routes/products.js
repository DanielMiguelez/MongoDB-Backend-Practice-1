const express = require("express")
const router = express.Router()
const { authentication, isAdmin } = require("../middlewares/authentication");

const ProductController = require("../controllers/ProductController")


router.post("/createProduct", authentication, isAdmin, ProductController.create)//
router.get("/getAllProducts", ProductController.getAllProducts)//
router.get("/getProductById/:_id", ProductController.getProductById)//
router.get("/getProductsByName/:name", ProductController.getProductsByName)//
router.delete("/deleteProduct/:_id", authentication, isAdmin, ProductController.deleteProduct)//
router.put("/updateProductById/:_id",authentication, isAdmin, ProductController.updateProductById)//
router.put("/insertComment/:_id",authentication, ProductController.insertComment)
router.put("/like/:_id",authentication, ProductController.like)
module.exports = router 