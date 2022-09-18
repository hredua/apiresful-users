'use strict'
const { default: mongoose } = require('mongoose')
var moongoose = require('mongoose')
var Schema = mongoose.Schema

var usuarioSchema = Schema({
    nome: {
        type: String
    },
    nomeUsuario: {
        type: String
    },
    senha: {
        type: String
    }
})

module.exports = mongoose.model('usuario', usuarioSchema)