const express = require('express')
const app = express()

app.use(express.json())

const praktikumController = require('../controllers/praktikumController')

app.get("/profil/:name/:age", praktikumController.profil)
app.post("/bujur_sangkar", praktikumController.bujurSangkar)

module.exports = app