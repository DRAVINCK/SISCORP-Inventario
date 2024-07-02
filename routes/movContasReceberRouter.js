//Routers/MovContasReceberRouter.js

var express = require('express');
var router = express.Router();

const db = require('../models');
const MovContasReceberService = require('../services/movContasReceberService');
const MovContasReceberServiceInstance = new MovContasReceberService(db.MovContasReceber);

const MovContasReceberController = require('../controllers/MovContasReceberController');
const MovContasReceberControllerInstance = new MovContasReceberController(MovContasReceberServiceInstance);

router.post('/criar', function(req, res, next) {
  MovContasReceberControllerInstance.criar(req, res);
});

router.get('/listarTodos', function(req, res, next) {
  MovContasReceberControllerInstance.listarTodos(req, res);
});

router.get('/buscarPorId/:id', function(req, res, next) {
  MovContasReceberControllerInstance.buscarPorId(req, res);
});

router.put('/atualizar/:id', function(req, res, next) {
  MovContasReceberControllerInstance.atualizar(req, res);
});

router.put('/cancelarMov/:id', function(req, res, next) {
  MovContasReceberControllerInstance.cancelarMov(req, res);
});

router.put('/pagarMov/:id', function(req, res, next) {
  MovContasReceberControllerInstance.pagarMov(req, res);
});

router.delete('/deletar/:id', function(req, res, next) {
  MovContasReceberControllerInstance.deletar(req, res);
});

module.exports = router;