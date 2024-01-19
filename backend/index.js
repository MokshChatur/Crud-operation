const express = require('express');
const port = 8000;
const app = express();
const database = require('./database')
const newCreateModel = require("./model/newUser.model")
const bodyparser = require('body-parser');
const routes = require('./routes');
const router = express.Router();
const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var cors = require('cors')
app.use(bodyparser.json())
app.use(cors()) 
app.use(express.static("public"))
app.use('/', routes(router)); 

app.use(function (req, res, next) {
    next(createError(404));
  });

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

  app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.listen(port, () => {
    console.log("Server Connected");
})

module.exports = app;