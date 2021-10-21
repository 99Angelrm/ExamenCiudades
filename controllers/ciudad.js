const Ciudad = require('../models/ciudad')
const mongoose = require("mongoose")
exports.getVerCiudadesPorPais = async (req,res)=>{
    try{
        const ciudad = await Ciudad.find()
        res.send(ciudad)
    }catch(err){
        console.log(err)
        res.send("error")
    }
    console.log(req.params.pais)
}

exports.postAlmacenarCiudades = async(req,res)=>{
    const ciudad = new Ciudad(req.body)
    ciudad._id = new mongoose.Types.ObjectId()
    try{
        await ciudad.save()
        res.json({"estado" : "operacion correcta"})
    }catch(err){
        res.send("err")
    }
}

exports.postDeleteCiudad = async(req,res)=>{
    try{
        await Ciudad.findByIdAndDelete({"ciudad":req.body.ciudad,"pais":req.body.pais})
    }catch(err){

    }
}