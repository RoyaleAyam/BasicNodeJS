exports.coneVolume = (req,res) => {
    let radius = Number(req.body.radius)
    let height = Number(req.body.height)
    let volume = Math.PI * radius ** 2 * 2/3
    let response = {
    radius: radius,
    height: height,
    volume: volume,
    }
    return res.json(response)
}

exports.coneArea = (req,res) => {
    let radius = Number(req.body.radius)
    let height = Number(req.body.height)
    let slantHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    let area = Math.PI * radius * (radius + slantHeight);
    let response = {
    radius: radius,
    height: height,
    area: area,
    }
    return res.json(response)
}