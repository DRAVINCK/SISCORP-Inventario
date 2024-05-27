// routers/CentroDeCustoRouter.js
var express = require('express');
var router = express.Router();

const db = require('../models');
const CentroDeCustoService = require('../services/CentroDeCustoService'); // Fix the file name in the import statement
const CentroDeCustoServiceInstance = new CentroDeCustoService(db.CentroDeCusto);

const CentroDeCustoController = require('../controllers/centroDeCustoController');
const CentroDeCustoControllerInstance = new CentroDeCustoController(CentroDeCustoServiceInstance);

router.post('/criar', function(req, res, next) {
  CentroDeCustoControllerInstance.criar(req, res);
});

router.get('/listarTodos', function(req, res, next) {
  CentroDeCustoControllerInstance.listarTodos(req, res);
});

router.put('/atualizar', function(req, res, next) {
  CentroDeCustoControllerInstance.atualizar(req, res);
});

router.delete('/deletar', function(req, res, next) {
  CentroDeCustoControllerInstance.deletar(req, res);
});

module.exports = router;
