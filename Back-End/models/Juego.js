const mongoose = require('mongoose')

//definir el esquema para el videojuego
const JuegoShema = new mongoose.Schema({
    
    nombre: {
        type: String,
        required: [true, 'El nombre del juego es obligatorio'],
        trim: true,
        unique: true,
    },

    plataforma: {
        type: String,
        required: [true, 'La plataforma es obligatoria']
    },

    portadaURL: {
        type: String,
        required: false
    },

    estado: {
        type: String,
        enum: ['Pendiente', 'Jugando','Completado'],
        default: 'Pendiente'
    },

    horasJugadas: {
        type: Number,
        default: 0,
        min: 0
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Juego', JuegoShema)