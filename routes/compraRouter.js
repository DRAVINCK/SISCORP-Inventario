// routers/compraRouter.js
var express = require('express');
var router = express.Router();

const db = require('../models');
const CompraService = require('../services/compraService');
const CompraServiceInstance = new CompraService(db.Compra);

const CompraController = require('../controllers/compraController');
const CompraControllerInstance = new CompraController(CompraServiceInstance);

router.post('/criar', function(req, res, next) {
  CompraControllerInstance.criar(req, res);
});

router.get('/listarTodos', function(req, res, next) {
  CompraControllerInstance.listarTodos(req, res);
});

router.get('/buscarPorId', function(req, res, next) {
  CompraControllerInstance.buscarPorId(req, res);
});

router.put('/atualizar', function(req, res, next) {
  CompraControllerInstance.atualizar(req, res);
});

router.delete('/deletar', function(req, res, next) {
  CompraControllerInstance.deletar(req, res);
});

module.exports = router;
