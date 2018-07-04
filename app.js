const express = require("express");
const app = express();
const hdbRouter = require('./hdb')


app.use(express.json());

app.use('/hdb', hdbRouter);


module.exports = app;
