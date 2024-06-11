const express = require('express');
const router = express.Router();

const db = require('../models');
const VendasService = require('../services/vendasService');
const VendasServiceInstance = new VendasService(db.Vendas);

const VendasController = require('../controllers/vendasController');
const VendasControllerInstance = new VendasController(VendasServiceInstance);

router.post('/criar', (req, res) => {
  VendasControllerInstance.criar(req, res);
});

router.get('/listarTodas', (req, res) => {
  VendasControllerInstance.listarTodas(req, res);
});

router.get('/buscarPorId/:id', (req, res) => {
  VendasControllerInstance.buscarPorId(req, res);
});

router.put('/atualizar/:id', (req, res) => {
  VendasControllerInstance.atualizar(req, res);
});

router.delete('/deletar/:id', (req, res) => {
  VendasControllerInstance.deletar(req, res);
});

module.exports = router;
