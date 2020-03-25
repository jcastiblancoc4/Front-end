'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MotoSchema = Schema({

    nombre: String,
    marca: String,
    precio: Number,
    cilindraje: String,
    peso: String,
    potencia: String,
    torque: String,
    motor: String,
    foto: String
});

module.exports = mongoose.model('motos', MotoSchema);