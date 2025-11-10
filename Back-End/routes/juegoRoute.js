const express = require('express')
const router = express.Router()
const juegoController = require('../controlers/juegoControler')

//Rutas crud para juegos

router.post('/',juegoController.crearJuego)
router.get('/',juegoController.obtenerJuegos)
router.get('/:id',juegoController.obtenerJuegoPorId)
router.put('/:id',juegoController.actualizarJuego)
router.delete('/:id',juegoController.eliminarJuego)

module.exports = router