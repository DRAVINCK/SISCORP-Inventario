// routers/Produto.js
var express = require('express');
var router = express.Router();

const db = require('../models');
const ProdutoService = require('../services/produtoService');
const ProdutoServiceInstance = new ProdutoService(db.Produto);

const ProdutoController = require('../controllers/produtoController');
const ProdutoControllerInstance = new ProdutoController(ProdutoServiceInstance);

router.post('/criar', function(req, res, next) {
  ProdutoControllerInstance.criar(req, res);
});

router.get('/listarTodos', function(req, res, next) {
  ProdutoControllerInstance.listarTodos(req, res);
});

router.get('/buscarPorId/:id', function(req, res, next) {
  ProdutoControllerInstance.buscarPorId(req, res);
});

router.put('/atualizar/:id', function(req, res, next) {
  ProdutoControllerInstance.atualizar(req, res);
});

router.delete('/deletar/:id', function(req, res, next) {
  ProdutoControllerInstance.deletar(req, res);
});

module.exports = router;
