const router = require('express').Router()
const CiudadController = require('../controllers/ciudad')

router.get("/almacenarCiudades",CiudadController.postAlmacenarCiudades)

router.get("/VerCiudadesPorPais",CiudadController.getVerCiudadesPorPais)

module.exports = router