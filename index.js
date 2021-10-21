// imports
const express = require("express")
const mongoose =  require('mongoose')
// rutas
const rutasCiudades = require('./routes/ciudad')
// app
const app = express()
// middlewares
app.use(express.json())
// endpoints
app.use("/",rutasCiudades)
// listen
mongoose.connect('mongodb://user2:root@18.234.222.26:27017/base2?authSource=admin')
.then(()=>{
    app.listen(8080, ()=>{
        console.log("Servidor en linea")
    })
})
.catch(err=>console.log(err))
