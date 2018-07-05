const express = require("express");
const app = express();
const hdbRouter = require('./hdb')

const errMsg = "Sorry can't find that"


app.use(express.json());

app.use('/hdb', hdbRouter);

app.use((req, res, next) => {
    res.status(404).json(errMsg);
})

module.exports = { app, errMsg }
