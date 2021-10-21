const Ciudad = require('../models/ciudad')

exports.getVerCiudadesPorPais = (req,res)=>{
    res.send("ciudades por pais")
}

exports.postAlmacenarCiudades = (req,res)=>{
    res.send("almacenar Ciudades")
}