var express = require('express');
var router = express.Router();

const db = require('../models');
const DetalhesDaVendaService = require('../services/detalhesDaVendaService');
const DetalhesDaVendaServiceInstance = new DetalhesDaVendaService(db.DetalhesDaVenda);

const DetalhesDaVendaController = require('../controllers/detalhesDaVendaController');
const DetalhesDaVendaControllerInstance = new DetalhesDaVendaController(DetalhesDaVendaServiceInstance);

router.post('/criar', function(req, res, next) {
  DetalhesDaVendaControllerInstance.criar(req, res);
});

router.get('/listarTodas', function(req, res, next) {
  DetalhesDaVendaControllerInstance.listarTodas(req, res);
});

router.get('/buscarPorId/:id', function(req, res, next) {
  DetalhesDaVendaControllerInstance.buscarPorId(req, res);
});

router.put('/atualizar/:id', function(req, res, next) {
  DetalhesDaVendaControllerInstance.atualizar(req, res);
});

router.delete('/deletar/:id', function(req, res, next) {
  DetalhesDaVendaControllerInstance.deletar(req, res);
});

module.exports = router;
