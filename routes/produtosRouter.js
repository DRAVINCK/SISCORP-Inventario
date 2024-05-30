// routers/Produto.js
var express = require('express');
var router = express.Router();

const db = require('../models');
const ProdutoService = require('../services/produtoService');
const ProdutoServiceInstance = new ProdutoService(db.Produto);

const ProdutoController = require('../controllers/produtoController');
const ProdutoControllerInstance = new ProdutoController(ProdutoServiceInstance);

router.get('/', function(req, res, next) { 
  res.send('Modulo de usuario está funcionando');
});

router.post('/cadastrarProduto', function(req,res,next){
  ProdutoControllerInstance.cadastrarProduto(req,res);
});

router.get('/listarTodos', function(req, res, next) {
  ProdutoControllerInstance.listarTodos(req, res);
});


module.exports = router;
