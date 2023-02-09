const Product = require("../models/Product");

const ProductController = {
  async create(req, res) {
    try {
      const product = await Product.create(req.body);
      res.status(201).send(product);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema al crear el producto", error });
    }
  },

  async getAllProducts(req, res) {
    try {
      const products = await Product.find()
      .populate("reviews.userId")
      .limit(req.query.limit)
      .skip((req.query.page - 1) * req.query.limit) 
      res.send(products);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema al crear el producto", error });
    }
  },

  async getProductById(req, res) {
    try {
      const product = await Product.findById(req.params._id);
      res.send(product);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({
          message: "Ha habido un problema al buscar el producto",
          error,
        });
    }
  },

  async getProductsByName(req, res) {
    try {
      /*if (req.params.name.length>20){
        return res.status(400).send('Búsqueda demasiado larga')
        }

      const name = new RegExp(req.params.name, "i");
      const products = await Product.find({name})*/

      const products = await Product.find({
        $text: {
          $search: req.params.name,
        },
      });
      res.send(products);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({
          message: "Ha habido un problema al buscarlos por nombre",
          error,
        });
    }
  },

  async deleteProduct(req, res) {
    try {
      const product = await Product.findByIdAndDelete(req.params._id);
      res.send({ product, message: "Product deleted" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema eliminando", error });
    }
  },

  async updateProductById(req, res) {
    try {
      const product = await Product.findByIdAndUpdate(req.params._id, req.body, {
        new: true,
      });
      res.send({ message: "Product updated", product });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "problem while deleting", error });
    }
  },

  async insertComment(req,res){
    try {
      const product = await Product.findByIdAndUpdate(
        req.params._id,
        {$push: { reviews: { comment:req.body.comment, userId: req.user._id } }},
        {new:true}
      )
      res.send({ message: "commented product ", product });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "problem commenting", error });
    }
    }
  };


module.exports = ProductController;
