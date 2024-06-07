const express = require('express');
const router = express.Router();

const db = require('../models');
const CotacaoService = require('../services/cotacaoService');
const CotacaoServiceInstance = new CotacaoService(db.Cotacao);

const CotacaoController = require('../controllers/cotacaoController');
const CotacaoControllerInstance = new CotacaoController(CotacaoServiceInstance);

router.post('/criar', function(req, res, next) {
  CotacaoControllerInstance.criar(req, res);
});

router.get('/listarTodas', function(req, res, next) {
  CotacaoControllerInstance.listarTodas(req, res);
});

router.get('/buscarPorId/:id', function(req, res, next) {
  CotacaoControllerInstance.buscarPorId(req, res);
});

router.put('/atualizar/:id', function(req, res, next) {
  CotacaoControllerInstance.atualizar(req, res);
});

router.delete('/deletar/:id', function(req, res, next) {
  CotacaoControllerInstance.deletar(req, res);
});

module.exports = router;
