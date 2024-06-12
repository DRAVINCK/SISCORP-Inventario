//routers/MovContasPagarRouter.js

var express = require('express');
var router = express.Router();

const db = require('../models');
const MovContasPagarService = require('../services/movContasPagarService');
const MovContasPagarServiceInstance = new MovContasPagarService(db.MovContasPagar);

const MovContasPagarController = require('../controllers/MovContasPagarController');
const MovContasPagarControllerInstance = new MovContasPagarController(MovContasPagarServiceInstance);

router.post('/criar', function(req, res, next) {
  MovContasPagarControllerInstance.criar(req, res);
});

router.get('/listarTodos', function(req, res, next) {
  MovContasPagarControllerInstance.listarTodos(req, res);
});

router.get('/buscarPorId/:id', function(req, res, next) {
  MovContasPagarControllerInstance.buscarPorId(req, res);
});

router.put('/atualizar/:id', function(req, res, next) {
  MovContasPagarControllerInstance.atualizar(req, res);
});

router.delete('/deletar/:id', function(req, res, next) {
  MovContasPagarControllerInstance.deletar(req, res);
});

module.exports = router;
