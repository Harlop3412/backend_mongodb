const proyectos = require("../models//proyectos")
const ProyectosModel = require("../models//proyectos")
exports.Hola = (req, res) => {
    console.log("hola desde el controlador")
    res.send("hola desde el controlador")
}
exports.proyectosList = async (req, res) => {
    try {
        const proyectosList = await ProyectosModel.find({})
        return res.status(200).json(proyectosList)
    } catch (error) {
        return res.status(500).send(error)
    }
}//trae los datos de la bd get
exports.crearProyecto = async (req,res)=>{
    try {
        const proyecto=req.body
        let nombre = req.body.nombre
        const imagen = req.body.imagen
        const autor = req.body.autor
        const genero = req.body.genero
        const descripcion = req.body.descripcion
        nombre = nombre.replace(/\s/g, "_") //expresion regular para quitar espacios vacios

        await ProyectosModel.create({
            nombre,
            imagen,
            autor,
            genero,
            descripcion
        })
        //return res.status(201).json(proyecto)
        return res.status(201).json(nombre)
    } catch (error) {
        return res.status(500).send(error)
    }
}//controlador que envia los datos a bd post

exports.obtenerProyectosPorId = async(req,res)=>{
    try {
        const {id} = req.params
        const proyecto = await ProyectosModel.findById(id)
        return res.status(200).json(proyecto)
    } catch (error) {
        return res.status(500).send(error)
        
    }
}//trae los datos por id get(id) busca un solo dato por id

exports.modificarProyecto = async (req,res) => {
    try {
        const {id} = req.params
        const proyecto = req.body

        let nombre = req.body.nombre.replace(/\s/g, "_") //expresion regular para quitar espacios vacios
        const  proyecto_nuevo = {
            "nombre":nombre,

            "proyecto":req.body.imagen,
            "autor": req.body.autor,
            "genero": req.body.autor,
            "descripcion": req.body.descripcion
        }
       
        const proyectoCambiado = await ProyectosModel.findByIdAndUpdate(id,proyecto_nuevo,{new:true})//el new es para que traiga el proyecto{objeto} modificado

        if(proyectoCambiado == null){
            return res.staus(404).json({message:"proyecto no encontrado"})
        }
        return res.status(200).json(proyectoCambiado)
    } catch (error) {
        
    }
}//busca por id y modifica el objeto put

exports.eliminarProyecto = async (req,res) => {
    try {
        const {id} = req.params
        
        if(id.length!=24){
            return res.status(400).json({message:"id no válido"})
        }
        await ProyectosModel.findByIdAndDelete(id)
        return res.status(200).json({message:`Libro con ${id} eliminado`})
    } catch (error) {
        return res.status(500).send(error)
    }
}//busca por id y elimina delete

exports.eliminarProyectoPorNombre = async(req,res)=>{
    try {
        const {nombre} = req.params
        

         await ProyectosModel.deleteOne(nombre)
        return res.status(200).json({message:`Libro ${nombre} eliminado`})
    } catch (error) {
        return res.status(500).send(error)
    }
}//busca por nombre en la bd y elimina delete


