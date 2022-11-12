import express from "express";
import cors from 'cors';
import db from "./database/db.js"
import PreguntaRoutes from "./routes/routesPregunta.js"
import PFRoutes from "./routes/routesPF.js"
import SolicitudRoutes from "./routes/routesSolicitud.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use('/preguntas', PreguntaRoutes)
app.use('/preguntas_frecuentes', PFRoutes)
app.use('/solicitudes', SolicitudRoutes)



try{
    await db.authenticate()
    console.log("Conexión exitosa a la DB")
}catch (error){
    console.log('El error de conexión es: ${error}')
}

app.get('/', (req,res)=>{
    res.send("Hola Mundo")
})

app.listen(8000, ()=>{
    console.log("Server UP running in http://localhost:8000")
})