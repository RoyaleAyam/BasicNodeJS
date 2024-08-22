exports.celsius = (req,res) => {
    let celsius = Number(req.body.celsius)
    let fahrenheit = celsius * 9/5
    let kelvin = celsius + 273.15
    let reamur = celsius * 9/5 + 32
    let response = {
    celsius: celsius,
    fahrenheit: fahrenheit,
    kelvin: kelvin,
    reamur: reamur,
    }
    return res.json(response)
}