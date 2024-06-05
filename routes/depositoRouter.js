
// routers/DepositoRouter.js

var express = require('express');
var router = express.Router();

const db = require('../models');
const DepositoService = require('../services/depositoService');
const DepositoServiceInstance = new DepositoService(db.Deposito, db.DepositoProduto);

const DepositoController = require('../controllers/depositoController');
const DepositoControllerInstance = new DepositoController(DepositoServiceInstance);


router.post('/criar', function(req, res, next) {
  DepositoControllerInstance.criarDeposito(req, res);
});

router.post('/adicionarProduto', function(req, res, next) {
  DepositoControllerInstance.adicionarProduto(req, res);
});

router.get('/listarProdutos/:id', function(req, res, next) {
  DepositoControllerInstance.listarProdutos(req, res);
});

router.get('/listarDepositos', function(req, res, next) {
  DepositoControllerInstance.listarDepositos(req, res);
});

router.get('/verificarDisponibilidade', function(req, res, next) {
  DepositoControllerInstance.verificarDisponibilidade(req, res);
});

module.exports = router;
