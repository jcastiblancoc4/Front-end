'use strict'

var express = require('express');
var MotoController = require('../controlador/moto');

var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads'});

router.post('/save-moto', MotoController.saveMoto);
router.get('/get-moto/:id?', MotoController.getMoto);
router.get('/get-motos', MotoController.getMotos);
router.put('/put-moto/:id', MotoController.updateMoto);
router.delete('/delete-moto/:id',MotoController.deleteMoto);
router.post('/upload-imagen/:id', multipartMiddleware, MotoController.uploadImagen);

module.exports = router;