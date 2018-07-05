const express = require('express')
const hdbRouter = express.Router()
const data = require("./utils/data.json");

hdbRouter.get('/', (req, res, next) => {
    res.json(data)
})

hdbRouter.get('/:flat_type', (req, res, next) => {
    const yearStart = req.query.yrstart
    const yearEnd = req.query.yrend
    const flatType = req.params.flat_type

    const flatTypeFilter = data.filter((hdb) => {
        return yearEnd ? hdb.lease_commence_date <= yearEnd : true
    }).filter((hdb) => {
        return yearStart ? hdb.lease_commence_date >= yearStart : true
    }).filter((hdb) => {
        return hdb.flat_type[0] === flatType
    })
    
    if(["1", "2", "3", "4", "5"].indexOf(flatType) > -1) {
         res.json(flatTypeFilter)
    } else next()
})

module.exports = hdbRouter