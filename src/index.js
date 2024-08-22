const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const praktikum = require("./routes/praktikumRoutes")
const cube = require("./routes/cubeRoutes")

app.use("/praktikum", praktikum)
app.use("/cube", cube)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get("/test", (req,res) => {
    let response = {
    message: "Ini end-point pertama ku",
    method: req.method,
    code: res.statusCode
    }
    res.json(response)
   })

app.listen(8000, () => {
    console.log("Server run on port 8000");
   })