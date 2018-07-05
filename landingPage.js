const express = require('express')
const landingPageRouter = express.Router()

const message = {
    1: "/hdb - to access full hdb data",
    2: "/hdb/:id - to access hdb flat type (room size). e.g. for 4 room flat's id = 4"
}

landingPageRouter.get('/', (req,res)=> {
    res.json(message)
})




module.exports = landingPageRouter