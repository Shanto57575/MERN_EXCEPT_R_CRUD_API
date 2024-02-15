const express = require('express')
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js')
const app = express()
require('dotenv').config()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute)

app.get('/', (req, res) => {
    res.send(`Hello From Node API`)
});

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@backenddb.vwivvi9.mongodb.net/Node-API?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Connected  to database");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        })
    })
    .catch(() => {
        console.log("Connection failed");
    })