// routers/Produto.js
var express = require('express');
var router = express.Router();

const db = require('../models');
const ProdutoService = require('../services/produtoService');
const ProdutoServiceInstance = new ProdutoService(db.Produto);

const ProdutoController = require('../controllers/produtoController');
const ProdutoControllerInstance = new ProdutoController(ProdutoServiceInstance);

<<<<<<< HEAD
router.post('/criar', function(req, res, next) {
  ProdutoControllerInstance.criar(req, res);
=======
router.get('/', function(req, res, next) { 
  res.send('Modulo de usuario está funcionando');
});

router.post('/cadastrarProduto', function(req,res,next){
  ProdutoControllerInstance.cadastrarProduto(req,res);
>>>>>>> main
});

router.get('/listarTodos', function(req, res, next) {
  ProdutoControllerInstance.listarTodos(req, res);
});

<<<<<<< HEAD
router.get('/buscarPorId/:id', function(req, res, next) {
  ProdutoControllerInstance.buscarPorId(req, res);
});

router.put('/atualizar/:id', function(req, res, next) {
  ProdutoControllerInstance.atualizar(req, res);
});

router.delete('/deletar/:id', function(req, res, next) {
  ProdutoControllerInstance.deletar(req, res);
});
=======
>>>>>>> main

module.exports = router;
