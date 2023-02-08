const express = require("express")
const router = express.Router()
const { authentication } = require("../middlewares/authentication");

const ProductController = require("../controllers/ProductController")


router.post("/createProduct", authentication,  ProductController.create)
router.get("/getAllProducts", ProductController.getAllProducts)
router.get("/getProductById/:_id", ProductController.getProductById)
router.get("/getProductsByName/:name", ProductController.getProductsByName)
router.delete("/deleteProduct/:_id", authentication, ProductController.deleteProduct)
router.put("/updateProductById/:_id",authentication, ProductController.updateProductById)
module.exports = router