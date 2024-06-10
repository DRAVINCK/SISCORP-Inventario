const express = require('express');
const router = express.Router();

const db = require('../models');
const CompraService = require('../services/compraService');
const CompraServiceInstance = new CompraService(db.Compra);

const CompraController = require('../controllers/compraController');
const CompraControllerInstance = new CompraController(CompraServiceInstance);

router.post('/criar', function(req, res, next) {
  CompraControllerInstance.criar(req, res);
});

router.get('/listarTodas', function(req, res, next) {
  CompraControllerInstance.listarTodas(req, res);
});

router.get('/buscarPorId/:id', function(req, res, next) {
  CompraControllerInstance.buscarPorId(req, res);
});

router.put('/atualizarSituacao/:id', function(req, res, next) {
  CompraControllerInstance.atualizarSituacao(req, res);
});

router.delete('/deletar/:id', function(req, res, next) {
  CompraControllerInstance.deletar(req, res);
});

module.exports = router;
