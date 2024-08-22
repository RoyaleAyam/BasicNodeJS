const express = require('express')
const app = express()

app.use(express.json())

const cubeController = require('../controllers/cubeController')

app.get("/cubeVolume", cubeController.cubeVolume)
app.get("/cubeArea", cubeController.cubeArea)

module.exports = app