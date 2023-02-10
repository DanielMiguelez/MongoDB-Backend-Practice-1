const express = require("express");
const app = express()
require("dotenv").config()
const mongoose = require('mongoose');
const {typeError} = require("./middlewares/errors")
const PORT = process.env.PORT || 8080
const {dbConnection} = require ("./config/config")
mongoose.set('strictQuery', false);

app.use(express.json())

app.use("/products", require("./routes/products"))
app.use("/users", require("./routes/users"))
app.use("/orders",require("./routes/orders"))

app.use(typeError)

dbConnection()


app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));