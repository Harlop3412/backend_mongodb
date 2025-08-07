const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProyectoSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        maxLength: 100
    },
    imagen :{
        type: String,
        required : true,
        maxLength: 100
    },
    autor:{
        type: String,
        required: true,
        maxLength: 100
    },
    genero:{
        type: String
    },
    descripcion:{
        type: String,
        required: true,
        maxLength: 500
    }

})

module.exports = mongoose.model("Proyecto",ProyectoSchema);



