// routers/DepositoRouter.js
var express = require('express');
var router = express.Router();

const db = require('../models');
const DepositoService = require('../services/depositoService');
const DepositoServiceInstance = new DepositoService(db.Deposito);

const DepositoController = require('../controllers/depositoController');
const DepositoControllerInstance = new DepositoController(DepositoServiceInstance);

router.post('/cadastrar', function(req, res, next) {
  DepositoControllerInstance.createDeposito(req, res);
});

router.get('/listarTodos', function(req, res, next) {
  DepositoControllerInstance.listarTodos(req, res);
});

module.exports = router;
