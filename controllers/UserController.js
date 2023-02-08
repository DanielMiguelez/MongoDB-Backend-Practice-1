const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/keys.js");
const bcrypt = require("bcryptjs");

const UserController = {
  async createUser(req, res) {
    try {
      
      const password = await bcrypt.hash(req.body.password, 10);
      const user = await User.create({ ...req.body, password, role:"user"});
      res.status(201).send(user);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema al crear el producto", error });
    }
  },

  async login(req, res) {
    try {
      const user = await User.findOne({
        email: req.body.email,
      });

      if(!user){
        return res.status(400).send("Email o contraseña incorrectos")
      }

      const isMatch = bcrypt.compare(req.body.password, user.password )
      if(!isMatch){
        return res.status(400).send("correo o contraseña incorrectos")
      }

      const token = jwt.sign({ _id: user._id }, jwt_secret);
      if (user.tokens.length > 4) user.tokens.shift();
      user.tokens.push(token);
      await user.save();
      res.send({ message: "Bienvenido" + " " + user.name, token });
      
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
};

module.exports = UserController;
