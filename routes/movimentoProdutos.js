// routers/MovimentoProdutoRouter.js
var express = require('express');
var router = express.Router();

const db = require('../models');
const MovimentoProdutoService = require('../services/movimentoProdutoService');
const MovimentoProdutoServiceInstance = new MovimentoProdutoService(db.MovimentoProduto);

const MovimentoProdutoController = require('../controllers/movimentoProdutoController');
const MovimentoProdutoControllerInstance = new MovimentoProdutoController(MovimentoProdutoServiceInstance);

router.post('/criarMovimentacao', function(req, res, next) {
  MovimentoProdutoControllerInstance.criar(req, res);
}); 

router.get('/listarTodos', function(req, res, next) {
  MovimentoProdutoControllerInstance.listarTodos(req, res);
});

module.exports = router;
