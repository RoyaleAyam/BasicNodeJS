exports.cubeVolume = (req,res) => {
    let edge = Number(req.body.edge)
    let volume = edge ** 3
    let response = {
    edge: edge,
    volume: volume,
    }
    res.json(response)
}