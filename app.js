const express = require("express");
const mongoose = require('mongoose');

const app = express()

mongoose.connect("mongodb://localhost/todo_express",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");

//routes


//server config
app.listen(3000,()=> console.log("Server started listening on 3000")) 