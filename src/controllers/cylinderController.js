exports.cylinderVolume = (req,res) => {
    let radius = Number(req.body.radius)
    let height = Number(req.body.height)
    let volume = Math.PI * radius ** 2 * height
    let response = {
    radius: radius,
    height: height,
    volume: volume,
    }
    return res.json(response)
}

exports.cylinderArea = (req,res) => {
    let radius = Number(req.body.radius)
    let height = Number(req.body.height)
    let area = 2 * Math.PI * radius * height + 2 * Math.PI * radius ** 2
    let response = {
    radius: radius,
    height: height,
    area: area,
    }
    return res.json(response)
}