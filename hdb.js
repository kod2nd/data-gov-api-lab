const express = require('express')
const hdbRouter = express.Router()
const data = require("./utils/data.json")
const dataWithId = data.map((element, index)=>{
    return element = {...element, id: String(index)}
});

// need to create a test for this   
// hdbRouter.get('/:id', (req, res, next) => {
//     const id = req.params.id

//     res.json(dataWithId.filter((hdb) => {
//         return hdb.id === id
//     }))
// })


hdbRouter.get('/', (req, res, next) => {
    const yearStart = req.query.yrstart
    const yearEnd = req.query.yrend
    const town = req.query.town
    const flatType = req.query.rooms

    const hdbFilters = dataWithId.filter((hdb) => {
        return yearEnd ? hdb.lease_commence_date <= yearEnd : true
    }).filter((hdb) => {
        return yearStart ? hdb.lease_commence_date >= yearStart : true
    }).filter((hdb) => {
        return town ? hdb.town.includes(town.toUpperCase()) : true
    }).filter((hdb) => {
        return flatType ? hdb.flat_type[0] === flatType : true
    })
    
    if(["1", "2", "3", "4", "5", undefined].indexOf(flatType) > -1) {
         res.json(hdbFilters)
    } else next()
})




module.exports = hdbRouter