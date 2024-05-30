// routers/fornecedorRouter.js

var express = require('express');
var router = express.Router();

const db = require('../models');
const FornecedorService = require('../services/fornecedorService');
const FornecedorServiceInstance = new FornecedorService(db.Fornecedor);

const FornecedorController = require('../controllers/fornecedorController');
const FornecedorControllerInstance = new FornecedorController(FornecedorServiceInstance);

router.post('/criar', function(req, res, next) {
  FornecedorControllerInstance.criar(req, res);
});

router.get('/listarTodos', function(req, res, next) {
  FornecedorControllerInstance.listarTodos(req, res);
});

router.get('/buscarPorId', function(req, res, next) {
  FornecedorControllerInstance.buscarPorId(req, res);
});

router.put('/atualizar', function(req, res, next) {
  FornecedorControllerInstance.atualizar(req, res);
});

router.delete('/deletar', function(req, res, next) {
  FornecedorControllerInstance.deletar(req, res);
});
module.exports = router;