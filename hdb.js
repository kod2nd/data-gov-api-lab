const express = require('express')
const hdbRouter = express.Router()
const data = require("./utils/data.json");

const queryObjLength = (object) => {
    return Object.keys(object).length
}

hdbRouter.get('/', (req, res, next) => {
    res.json(data)
})

hdbRouter.get('/:flat_type', (req, res, next) => {
    const yearStart = req.query.yrstart
    const yearEnd = req.query.yrend

    const flatTypeFilter = data.filter((hdb) => {
        return yearEnd ? hdb.lease_commence_date <= yearEnd : true
    }).filter((hdb) => {
        return yearStart ? hdb.lease_commence_date >= yearStart : true
    }).filter((hdb) => {
        return hdb.flat_type[0] === req.params.flat_type
    })

    res.json(flatTypeFilter)
})

module.exports = hdbRouter