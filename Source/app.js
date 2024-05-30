const express = require("express");
const mongoose = require('mongoose');

const app = express()

//server config
app.listen(3000,()=> console.log("Server started listening on 3000")) 