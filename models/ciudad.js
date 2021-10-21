const mongoose = require('mongoose')

const CiudadSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    ciudad : String,
    pais : String,
    atractivo : String,
    contador : Number
},{collection:'CiudadesAngel'})

const Ciudad = mongoose.model('Ciudad',CiudadSchema)

module.exports=Ciudad