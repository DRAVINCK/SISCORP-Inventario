var express = require('express');
var router = express.Router();

const db = require('../models');
const ClienteService = require('../services/clienteService');
const ClienteServiceInstance = new ClienteService(db.Cliente);

const ClienteController = require('../controllers/clienteController');
const ClienteControllerInstance = new ClienteController(ClienteServiceInstance);

router.post('/criar', function(req, res, next) {
  ClienteControllerInstance.create(req, res);
});

router.get('/listarTodos', function(req, res, next) {
  ClienteControllerInstance.listarTodos(req, res);
});

router.get('/buscarPorId/:id', function(req, res, next) {
  ClienteControllerInstance.buscarPorId(req, res);
});

router.put('/atualizar', function(req, res, next) {
  ClienteControllerInstance.atualizar(req, res);
});

router.delete('/deletar/:id', function(req, res, next) {
  ClienteControllerInstance.deletar(req, res);
});

module.exports = router;
