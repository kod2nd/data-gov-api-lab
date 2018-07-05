const express = require("express");
const app = express();
const hdbRouter = require('./hdb')
const landingPageRouter = require('./landingPage')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger-sample.json')

const errMsg = "Sorry can't find that"

app.use(express.json());
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// app.use('/', landingPageRouter)
app.use('/hdb', hdbRouter);
app.use((req, res, next) => {
    res.status(404).json(errMsg);
})

module.exports = { app, errMsg }
