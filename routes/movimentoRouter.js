// routers/movimentoRouter.js
var express = require('express');
var router = express.Router();

const db = require('../models');
const MovimentoService = require('../services/movimentoService');
const MovimentoServiceInstance = new MovimentoService(db.Movimento);

const MovimentoController = require('../controllers/movimentoController');
const MovimentoControllerInstance = new MovimentoController(MovimentoServiceInstance);

router.post('/criar', function(req, res, next) {
  MovimentoControllerInstance.criar(req, res);
});

router.get('/listarTodos', function(req, res, next) {
  MovimentoControllerInstance.listarTodos(req, res);
});

router.put('/atualizar', function(req, res, next) {
  MovimentoControllerInstance.atualizar(req, res);
});

router.delete('/deletar', function(req, res, next) {
  MovimentoControllerInstance.deletar(req, res);
});

module.exports = router;
