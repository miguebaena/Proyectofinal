const express = require('express')
const router = express.Router()
const resenaController = require('../controlers/resenaControler')

//Rutas crud para reseñas

router.post('/',resenaController.crearResena)
router.get('/',resenaController.obtenerResenas)
router.get('/:id',resenaController.obtenerResenaPorId)
router.put('/:id',resenaController.actualizarResena)
router.delete('/:id',resenaController.eliminarResena)

module.exports = router