const Order = require("../models/Order");
const User = require("../models/User")

const OrderController = {
  async create(req, res) {
    try {
      
      const order = await Order.create({
        ...req.body,
        status: "pending",
        deliveryDate: new Date().setDate(new Date().getDate() + 2),
        userId: req.user._id,
      });

      await User.findByIdAndUpdate(req.user._id, {$push: {OrderIds:order._id}})

      res
        .status(201)
        .send({ msg: `${req.user.name} gracias por el pedido`, order });
    } catch (error) {
      console.error(error);
    }
  },
  async getAllOrders(req, res) {
    try {
      const orders = await Order.find()
        .limit(req.query.limit)
        .skip((req.query.page - 1) * req.query.limit);
      res.send({msg:"Orders obtained", orders});
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema altraer ordenes", error });
    }
  },

  async deleteOrder(req, res) {
    try {
      const order = await Order.findByIdAndDelete(req.params._id);
      res.send({ order, message: "Order deleted" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema eliminando", error });
    }
  },

  async update(req, res) {
    try {
      const order = await Order.findByIdAndUpdate(
        req.params._id,

        { ...req.body, userId: req.user._id },
        {
          new: true,
        }
      );
      res.send({ message: "order successfully updated", order });

    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = OrderController;
