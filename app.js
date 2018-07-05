const express = require("express");
const app = express();
const hdbRouter = require('./hdb')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger-deploy.json')

const errMsg = "Sorry can't find that"

app.get('/', () => {
    res.json({
        help: "Refer to /api-help to get started!"
    })
})

app.use('/api-help', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(express.json());

app.use('/hdb', hdbRouter);
app.use((req, res, next) => {
    res.status(404).json(errMsg);
})

module.exports = { app, errMsg }
