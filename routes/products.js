// routers/ProductRouter.js
var express = require('express');
var router = express.Router();

const db = require('../models');
const ProductService = require('../services/productService');
const ProductServiceInstance = new ProductService(db.Product);

const ProductController = require('../controllers/productController');
const ProductControllerInstance = new ProductController(ProductServiceInstance);

router.get('/', function(req, res, next) { 
  res.send('Modulo de usuario está funcionando');
});

router.get('/listarTodos', function(req, res, next) {
  ProductControllerInstance.listarTodos(req, res);
});

router.post('/cadastrarProduto', function(req,res,next){
  ProductControllerInstance.cadastrarProduto(req,res);
});

module.exports = router;
