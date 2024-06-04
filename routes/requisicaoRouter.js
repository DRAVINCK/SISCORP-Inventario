// routes/requisicaoRouter.js
var express = require('express');
var router = express.Router();

const db = require('../models');
const RequisicaoService = require('../services/requisicaoService');
const RequisicaoServiceInstance = new RequisicaoService(db.Requisicao);

const RequisicaoController = require('../controllers/requisicaoController');
const RequisicaoControllerInstance = new RequisicaoController(RequisicaoServiceInstance);

router.post('/criar', function(req, res, next) {
  RequisicaoControllerInstance.criar(req, res);
});

router.post('/cancelar/:id', function(req, res, next) {
  RequisicaoControllerInstance.cancelar(req, res);
});

router.get('/listarTodas', function(req, res, next) {
  RequisicaoControllerInstance.listarTodas(req, res);
});

module.exports = router;
