const express = require('express')
const app = express()

app.use(express.json())

const cylinderController = require('../controllers/cylinderController')

app.post("/cylinderVolume", cylinderController.cylinderVolume)
app.post("/cylinderArea", cylinderController.cylinderArea)

module.exports = app