const Ciudad = require('../models/ciudad')
const mongoose = require("mongoose")
exports.getVerCiudadesPorPais = async (req,res)=>{
    try{
        const ciudades = await Ciudad.find({"pais":req.params.pais})
        res.send(ciudades)
    }catch(err){
        console.log(err)
        res.send("error")
    }
}

exports.postAlmacenarCiudades = async(req,res)=>{
    const ciudad = new Ciudad(req.body)
    ciudad._id = new mongoose.Types.ObjectId()
    ciudadExistente = await Ciudad.findOne({"pais":req.body.pais,"ciudad":req.body.ciudad})
    if(ciudadExistente===null){
        try{
            ciudad.contador = 1
            await ciudad.save()
            res.json({"estado" : "Ciudad nueva"})
        }catch(err){
            res.send("err")
        }
    }else{
        try{
            await Ciudad.findOneAndUpdate({"pais":req.body.pais,"ciudad":req.body.ciudad},{contador:ciudadExistente.contador+1})
            res.json({"estado" : "Ciudad repetida, contador incrementado"})
        }catch(err){
            res.send("err")
        }
    }
}

exports.getDeleteAll = async(req,res)=>{
    try{
        await Ciudad.remove({})
        res.json({"estado":"Todas las ciudades han sido borradas"})
    }catch(err){

    }
}