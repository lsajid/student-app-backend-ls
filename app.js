//import express
const express = require("express");
const cors = require("cors");

//initialize app
const app = express();
//middleware
app.use(cors());
const studentsController = require("./controllers/studentsController.js");
const namesController = require("./controllers/namesController.js");

app.use('/students', studentsController);
app.use('/names', namesController);

app.get("/", (req, res) => {
    res.send("Hello World!");
})

module.exports = app;