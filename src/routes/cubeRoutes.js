const express = require('express')
const app = express()

app.use(express.json())

const cubeController = require('../controllers/cubeController')

app.post("/cubeVolume", cubeController.cubeVolume)

module.exports = app