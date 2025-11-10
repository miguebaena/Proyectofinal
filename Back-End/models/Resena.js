const mongoose = require('mongoose')
const { Schema } = mongoose

//definir el esquema para la reseña
const ResenaShema = new mongoose.Schema({
    
    juego: {
        type: Schema.Types.ObjectId,
        ref: 'Juego',
        required: true
    },

    puntuacion: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },

    texto: {
        type: String,
        required: [true, 'El texto de la reseña es obligatorio']
    },

    autor: {
        type: String,
        default: 'Usuario de GameTracker'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Resena', ResenaShema);