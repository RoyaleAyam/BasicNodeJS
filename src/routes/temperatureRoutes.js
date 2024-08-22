const express = require('express')
const app = express()

app.use(express.json())

const temperatureController = require('../controllers/temperatureController')

app.post("/celsius", coneController.celsius)

module.exports = app