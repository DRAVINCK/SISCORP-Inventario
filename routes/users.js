var express = require('express');
var router = express.Router();

const db = require('../models');
const userService= require('../services/userService'); //classe
const UserService = new userService(db.User); //Construção do objeto

const userController = require('../controllers/userController');//classe
const UserController = new userController(UserService); //construção do onjeto

/* GET users listing. */
router.get('/', function(req, res, next) { //nome da rota '/'
  res.send('Modulo de usuario está funcionando');
});

//rota para criar um novo usuario
router.post('/novoUsuario', function(req,res,next){
  UserController.create(req,res);
});

router.get('/login', function(req, res, next) { 
  UserController.login(req,res);
});

router.get('/localizarUsuarioPeloId', function(req, res, next) { 
  UserController.localizarUsuarioPeloId(req,res);
});

router.get('/listarTodos', function(req, res, next) { 
  UserController.listarTodos(req,res);
});
module.exports = router;
