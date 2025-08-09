const express = require("express")
const proyectoControllers = require("../controllers/controllers.proyecto")
const router = express.Router()


router.post("/",proyectoControllers.crearProyecto)
router.get("/",proyectoControllers.proyectosList)
router.get("/nombre/:nombre", proyectoControllers.obtenerProyectoPorNombre);
router.get("/:id",proyectoControllers.obtenerProyectosPorId)
router.put("/nombre/:nombreParam", proyectoControllers.modificarProyectoPorNombre)
router.put("/:id",proyectoControllers.modificarProyecto)
router.delete("/:id",proyectoControllers.eliminarProyecto)
router.delete("/nombre/:nombre",proyectoControllers.eliminarProyectoPorNombre)

module.exports = router