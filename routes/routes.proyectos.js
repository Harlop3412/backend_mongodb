const express = require("express")
const proyectoControllers = require("../controllers/controllers.proyecto")
const router = express.Router()

router.get("/", proyectoControllers.Hola)

module.exports = router