const express = require("express")
const router = express.Router()

const ProductController = require("../controllers/ProductController")


router.post("/createProduct", ProductController.create)
router.get("/getAllProducts", ProductController.getAllProducts)
router.get("/getProductById/:_id", ProductController.getProductById)
router.get("/getProductsByName/:name", ProductController.getProductsByName)
router.delete("/deleteProduct/:_id", ProductController.deleteProduct)
router.put("/updateProductById/:_id", ProductController.updateProductById)
module.exports = router