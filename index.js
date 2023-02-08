const express = require("express");
const mongoose = require('mongoose');
const app = express()
const PORT = 8080
const {dbConnection} = require ("./config/config")
mongoose.set('strictQuery', false);

app.use(express.json())

app.use("/products", require("./routes/products"))
app.use("/users", require("./routes/users"))
app.use("/orders",require("./routes/orders"))

dbConnection()


app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));