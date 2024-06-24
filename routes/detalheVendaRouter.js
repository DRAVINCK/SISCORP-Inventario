//routers/detalheVenda.js

var express = require('express');
var router = express.Router();

const db = require('../models');
const DetalheVendaService = require('../services/detalheVendaService');
const DetalheVendaServiceInstance = new DetalheVendaService(db.detalheVenda);

const DetalheVendaController = require('../controllers/detalheVendaController');
const DetalheVendaControllerInstance = new DetalheVendaController(DetalheVendaServiceInstance);

router.post('/criar', function(req, res, next) {
  DetalheVendaControllerInstance.criar(req, res);
});

module.exports = router;