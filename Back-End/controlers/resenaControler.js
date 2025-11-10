const Resena = require('../models/Resena')
//Crear reseña
exports.crearResena = async (req, res) => {
    try{
        const nuevoResena = new Resena(req.body)
        await nuevoResena.save();
        res.status(201).json(nuevoResena)
    } catch (error){
        req.status(400).json({
            error: 'Error al agregar Reseña. verifique los campos',
            details: error.message
        })
    }
}

//Obtener datos todos los Resenas
exports.obtenerResenas = async (req,res) => {
    try{
        const filtro = req.query.juegoId ? {juego: req.query.Id} : {}

        const resena = await Resena.find(filtro).populate(juego,nombre);
        req.status(201).json(resena);
    } catch (error){
        res.status(500).json({ error: 'Error al obtener las Reseñas'})
    }
}

// obtener datos por ID del Resena

exports.obtenerResenaPorId = async (req,res) => {
    try{
        const resena = await Resena.find(filtro).populate(juego,nombre);

        if (!resena){
            return res.status(404).json({msj: 'Reseña no encontrada'})
        }

        res.status(200).json(resena)
    }catch(error){
        res.status(500).json({error: 'Error al buscar Resena'})
    }
}

// Actualizar Resenas

exports.actualizarResena = async (req,res) => {
    try{
        const resena = await Resena.findByIdAndUpdate(req.params.id, req.doy,{
            new: true,
            runValidators: true
        })

        if(!resena){
            return res.status(404).json({msj: 'Reseña no encontrado'})
        }
        res.status(200).json(resena)
    } catch(error){
        res.status(400).json({
            error: 'Error al actualizar Resena',
            details: error.message
        })
    }
}

//Eliminar
exports.eliminarResena = async (req,res) => {
    try{
        const resena = await Resena.findByIdAndDelete(req.params.id)

        if(!resena){
            return res.status(404).json({msj: 'Resena no encontrado para eliminar'})
        }

        res.status(200).json({msj: 'Resena eliminado correctamente'})
    } catch(error){
        res.status(500).json({error: 'Error al eliminar Resena'})
    }
}