exports.celsius = (req, res) => {
    let celsius = Number(req.body.celsius);
    let fahrenheit = celsius * 9/5 + 32;
    let kelvin = celsius + 273.15;
    let reamur = celsius * 4/5;
    let response = {
        celsius: celsius,
        fahrenheit: fahrenheit,
        kelvin: kelvin,
        reamur: reamur,
    };
    return res.json(response);
}

exports.fahrenheit = (req, res) => {
    let fahrenheit = Number(req.body.fahrenheit);
    let celsius = (fahrenheit - 32) * 5/9;
    let kelvin = (fahrenheit - 32) * 5/9 + 273.15;
    let reamur = (fahrenheit - 32) * 4/9;
    let response = {
        fahrenheit: fahrenheit,
        celsius: celsius,
        kelvin: kelvin,
        reamur: reamur,
    };
    return res.json(response);
}

exports.kelvin = (req, res) => {
    let kelvin = Number(req.body.kelvin);
    let celsius = kelvin - 273.15;
    let fahrenheit = (kelvin - 273.15) * 9/5 + 32;
    let reamur = (kelvin - 273.15) * 4/5;
    let response = {
        kelvin: kelvin,
        celsius: celsius,
        fahrenheit: fahrenheit,
        reamur: reamur,
    };
    return res.json(response);
}

exports.reamur = (req, res) => {
    let reamur = Number(req.body.reamur);
    let celsius = reamur * 5/4;
    let fahrenheit = reamur * 9/4 + 32;
    let kelvin = reamur * 5/4 + 273.15;
    let response = {
        reamur: reamur,
        celsius: celsius,
        fahrenheit: fahrenheit,
        kelvin: kelvin,
    };
    return res.json(response);
}