require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3000;
MONGODB_URL =process.env.MONGODB_URL

app.use(express.json())

mongoose.connect(MONGODB_URL)
    .then(()=>{
        console.log('Conexion exitosa a MongoDB Atlas')
    })
    .catch(err => {
        console.log('Error en la conexion', err.message)
        process.exit(1)
    })



//Rutas
app.use('/api/juegos',require('./routes/juegoRoute'))

const resenasRoutes = require('./routes/resenaRoute')
app.use('/api/resenas',resenasRoutes)

app.listen(PORT, () =>{
    console.log(`Servidor Corriendo en http://localhost:${PORT}`)
})