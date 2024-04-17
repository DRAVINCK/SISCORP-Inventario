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

//rora para criar um novo usuario
router.post('/novoUsuario', function(req,res,next){
  UserController.create(req,res);
});

router.get('/localizarUsuarioPeloLogin', function(req, res, next) { 
  UserController.localizarUsuarioPeloLogin(req,res);
});

router.get('/localizarUsuarioPeloId', function(req, res, next) { 
  UserController.localizarUsuarioPeloId(req,res);
});
module.exports = router;
