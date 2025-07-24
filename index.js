const express = require("express")
const mongoose = require("mongoose")
const proyectoRoutes = require("./routes/routes.proyectos")//

require("dotenv").config()
const app = express()
const PORT = process.env.PORT || 3006
app.set("port",PORT)
app.get("/",(req,res)=>{
    console.log("hola mundo")
    res.send("hola mundo")
})
app.use(express.json()); //recordar convertir a json
app.use("/api/proyectos",proyectoRoutes)//
mongoose.connect(process.env.MONGO_DB_URI)
.then( ()=> console.log("connect to BD"))
.catch((err)=>console.error(err.message)),
app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})
