'use strict'

var Moto = require('../modelo/moto');
var fs = require('fs');
var controller = {

	//Metodo para guardar datos 
	saveMoto :  function(req, res){
		var moto = new Moto();

		var params = req.body;
		moto.nombre = params.nombre;
		moto.marca = params.marca;
		moto.precio = params.precio;
		moto.cilindraje = params.cilindraje;
		moto.peso = params.peso;
		moto.potencia = params.potencia;
		moto.torque = params.torque;
		moto.motor = params.motor;

		moto.save((err, motoStored) =>{
			if(err) return res.status(500).send({message: 'Error al guardar los datos'});

			if(!motoStored) return res.status(404).send({message: 'No se a podido guardar la informacion'});

			return res.status(200).send({moto: motoStored});
		});
	},

	//Metodo para buscar un dato por id
	getMoto: function(req, res){
		var motoId = req.params.id;

		if(motoId == null) return res.status(404).send({message: 'El registro no existe.'});

		Moto.findById(motoId, (err, moto) =>{

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!moto) return res.status(404).send({message: 'El registro no existe.'});

			return res.status(200).send({
				moto
			});
		});
	},

	//Metodo para ver todos los datos
	getMotos: function(req, res){

		Moto.find({}).exec((err, moto)=> {

			if(err) return res.status(500).send({message: 'Error al devolver los datos'});

			if(!moto) return res.status(404).send({message: 'No hay datos para mostrar'});

			return res.status(200).send({moto});
		});
	},

	//Metodo para actualizar dato
	updateMoto: function(req, res){
		var motoId = req.params.id;
		var update = req.body;

		Moto.findByIdAndUpdate(motoId, update, {new:true}, (err, motoUpdate)=>{
			if(err) return res.status(500).send({message: 'Error al actualizar'});

			if(!moto) return res.status(404).send({message: 'No existe la moto indicada'});

			return res.status(200).send({
				moto: motoUpdate
			});
		});
	},

	//Metodo para eliminar dato
	deleteMoto: function(req, res){
		var motoId = req.params.id;

		Moto.findByIdAndRemove(motoId, (err, motoRemoved) => {
			if(err) return res.status(500).send({message: 'No se a podido borrar el registro'});
			
			if(!motoRemoved) return res.status(404).send({message: 'No se a podido eliminar el registro'});

			return res.status(200).send({
				moto: motoRemoved
			});
		});
	},

	//metodo para subir imagen
	uploadImagen: function(req, res){
		var motoId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.foto.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){
				Moto.findByIdAndUpdate(motoId, {foto: fileName}, {new: true}, (err, motoUpdate) => {
					if(err) return res.status(500).send({message: 'La imagen no se a subido'});

					if(!motoUpdate) return res.status(404).send({message: 'El registro no existe'});

					return res.status(200).send({
						moto: motoUpdate
					});
				}); 
			}else {
				fs.unlink(filrPath, (err) =>{
					return res.status(200).send({message: 'la extencion no es valida'});
				});
			}
		}else {
			return res.status(200).send({
				message: fileName
			}) ;

		}
	}



};

module.exports= controller;