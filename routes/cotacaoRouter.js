// routers/cotacaoRouter.js

var express = require('express');
var router = express.Router();

const db = require('../models');
const CotacaoService = require('../services/cotacaoService');
const CotacaoServiceInstance = new CotacaoService(db.CotacaoService);

const CotacaoController = require('../controllers/cotacaoController');
const CotacaoControllerInstance = new CotacaoController(CotacaoServiceInstance);

router.post('/criar', function(req, res, next) {
  CotacaoControllerInstance.criar(req, res);
});

router.get('/listarTodos', function(req, res, next) {
  CotacaoControllerInstance.listarTodos(req, res);
});

router.get('/buscarPorId', function(req, res, next) {
  CotacaoControllerInstance.buscarPorId(req, res);
});

router.put('/atualizar', function(req, res, next) {
  CotacaoControllerInstance.atualizar(req, res);
});

router.delete('/deletar', function(req, res, next) {    
  CotacaoControllerInstance.deletar(req, res);
});
module.exports = router;