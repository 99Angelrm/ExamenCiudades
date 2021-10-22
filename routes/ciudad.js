const router = require('express').Router()
const CiudadController = require('../controllers/ciudad')

router.post("/almacenarCiudades",CiudadController.postAlmacenarCiudades)

router.get("/VerCiudadesPorPais/:pais",CiudadController.getVerCiudadesPorPais)

router.get("/deleteAll",CiudadController.getDeleteAll)

module.exports = router