const express = require('express')
const app = express()

app.use(express.json())

const sphereController = require('../controllers/sphereController')

app.get("/sphereVolume", sphereController.sphereVolume)
app.get("/sphereArea", sphereController.sphereArea)

module.exports = app