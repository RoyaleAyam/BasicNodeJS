const express = require('express')
const app = express()

app.use(express.json())

const temperatureController = require('../controllers/temperatureController')

app.post("/celsius", temperatureController.celsius)
app.post("/fahrenheit", temperatureController.fahrenheit)
app.post("/kelvin", temperatureController.kelvin)
app.post("/reamur", temperatureController.reamur)

module.exports = app