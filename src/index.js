const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser= require("body-parser");
const route = require("./routes/route");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
    

mongoose.connect("mongodb+srv://Gauravkhajindar:WWKCSP1WrPINTgvo@cluster0.2q2wy.mongodb.net/ProductMangement?retryWrites=true&w=majority")
.then(()=>console.log("Mongodb Connected"))
.catch((err)=> console.log(err.message));


app.use("/", route);

module.exports = app.listen(process.env.PORT || 5000, function () {
  console.log("Port running on " + (process.env.PORT || 5000));
});

