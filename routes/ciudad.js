const router = require('express').Router()
const CiudadController = require('../controllers/ciudad')

router.post("/almacenarCiudades",CiudadController.postAlmacenarCiudades)

router.get("/VerCiudadesPorPais/:pais",CiudadController.getVerCiudadesPorPais)

router.post("/delete",CiudadController.postDeleteCiudad)

module.exports = router