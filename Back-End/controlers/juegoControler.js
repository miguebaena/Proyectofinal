const Juego = require('../models/Juego')

//201 = Se creo correctamente - POST
//200 = El resultado solicitado fue exitoso - GET, PUT, DELETE

//casos error
//404,401,500

// C - Crear juego
exports.crearJuego = async (req, res) => {
    try{
        const nuevoJuego = new Juego(req.body)
        await nuevoJuego.save();
        res.status(201).json(nuevoJuego)
    } catch (error){
        req.status(400).json({
            error: 'Error al agregar juego. verifique los campos',
            details: error.message
        })
    }
}

//Obtener datos todos los juegos
exports.obtenerJuegos = async (req,res) => {
    try{
        const juegos = await Juego.find();
        res.status(201).json(juegos);
    } catch (error){
        res.status(500).json({ error: 'Error al encontrar juego'})
    }
}

// obtener datos por ID del juego

exports.obtenerJuegoPorId = async (req,res) => {
    try{
        const juego = await Juego.findById(req.params.id)

        if (!juego){
            return res.status(404).json({msj: 'Juego no encontrado'})
        }

        res.status(200).json(juego)
    }catch(error){
        res.status(500).json({error: 'Error al buscar juego'})
    }
}

// Actualizar juegos

exports.actualizarJuego = async (req,res) => {
    try{
        const juego = await Juego.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true
        })

        if(!juego){
            return res.status(404).json({msj: 'Juego no encontrado'})
        }
        res.status(200).json(juego)
    } catch(error){
        res.status(400).json({
            error: 'Error al actualizar juego',
            details: error.message
        })
    }
}

//Eliminar
exports.eliminarJuego = async (req,res) => {
    try{
        const juego = await Juego.findByIdAndDelete(req.params.id)

        if(!juego){
            return res.status(404).json({msj: 'Juego no encontrado para eliminar'})
        }

        res.status(200).json({msj: 'Juego eliminado correctamente'})
    } catch(error){
        res.status(500).json({error: 'Error al eliminar juego'})
    }
}