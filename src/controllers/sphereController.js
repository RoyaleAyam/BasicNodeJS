exports.sphereVolume = (req,res) => {
    let radius = Number(req.body.radius)
    let volume = 4/3 * Math.PI * radius ** 3
    let response = {
    radius: radius,
    volume: volume,
    }
    return res.json(response)
}

exports.sphereArea = (req,res) => {
    let radius = Number(req.body.radius)
    let area = 4 * Math.PI * radius ** 2
    let response = {
    radius: radius,
    area: area,
    }
    return res.json(response)
}