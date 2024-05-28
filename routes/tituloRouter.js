// routers/tituloRouter.js
var express = require('express');
var router = express.Router();

const db = require('../models');
const TituloService = require('../services/tituloService');
const TituloServiceInstance = new TituloService(db.Titulo);

const TituloController = require('../controllers/tituloController');
const TituloControllerInstance = new TituloController(TituloServiceInstance);

router.post('/criar', function(req, res, next) {
  TituloControllerInstance.criar(req, res);
});

router.get('/listarTodos', function(req, res, next) {
  TituloControllerInstance.listarTodos(req, res);
});

router.put('/atualizar', function(req, res, next) {
  TituloControllerInstance.atualizar(req, res);
});

router.delete('/deletar', function(req, res, next) {
  TituloControllerInstance.deletar(req, res);
});

module.exports = router;
