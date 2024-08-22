exports.cubeVolume = (req,res) => {
    let edge = Number(req.body.edge)
    let volume = edge ** 3
    let response = {
    edge: edge,
    volume: volume,
    }
    return res.json(response)
}

exports.cubeArea = (req,res) => {
    let edge = Number(req.body.edge)
    let area = 6 * (edge ** 2)
    let response = {
    edge: edge,
    area: area,
    }
    return res.json(response)
}