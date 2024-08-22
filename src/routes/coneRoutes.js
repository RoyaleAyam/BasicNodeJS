const express = require('express')
const app = express()

app.use(express.json())

const coneController = require('../controllers/coneController')

app.post("/coneVolume", coneController.coneVolume)
app.post("/coneArea", coneController.coneArea)

module.exports = app