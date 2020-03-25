'use strict'

//conexion a la base de datos moto en mongo//
var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://jpcastiblancoc:Abc12345*@cluster0-2whcg.mongodb.net/Bdmotos?retryWrites=true&w=majority')
		.then(()=> {
			console.log("Conexion a la BD ok.......");

			//creacion del servidor
			app.listen(port, () => {
				console.log("Servidor corriendo en la url: localhost:3700");
			})
		})
		.catch(err => console.log(err));
//Fin de codigo para la conexion a la bd //		