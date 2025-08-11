const express = require("express")
const mongoose = require("mongoose")
const proyectoRoutes = require("./routes/routes.proyectos")//
const cors = require("cors")

require("dotenv").config()
const app = express()
const PORT = process.env.PORT || 3006
app.set("port",PORT)
app.use(cors())
app.get("/",(req,res)=>{
    console.log("bd royecto")
    res.send("bd proyecto")
})
app.use(express.json()); //recordar convertir a json
app.use("/api/proyectos",proyectoRoutes)//ruta api
mongoose.connect(process.env.MONGO_DB_URI)
.then( ()=> console.log("connect to BD"))
.catch((err)=>console.error(err.message)),
app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})
