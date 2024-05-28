var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var depositosRouter = require('./routes/depositos');
var movimentosRouter = require('./routes/movimentoProdutos');
var centroDeCustoRouter = require('./routes/centroDeCustoRouter');
var compraRouter = require('./routes/compraRouter');
var movimentoRouter = require('./routes/movimentoRouter');
var tituloRouter = require('./routes/tituloRouter');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/depositos', depositosRouter);
app.use('/movimentoProdutos', movimentosRouter);
app.use('/centroDeCusto', centroDeCustoRouter);
app.use('/compra', compraRouter);
app.use('/movimento', movimentoRouter);
app.use('/titulo', tituloRouter);
const db = require('./models');

//aplicar migrations integrar com banco de dados mysql
//função para controlar a sincronização com o banco de dados
async function ApplyMigrations(){
try{
migration_config={
    crate: true,
    alter: true
};

//aplicando migração
await db.sequelize.sync({
    alter: migration_config.alter
});
console.log("Sincronização com o banco de dados realizada")

}
catch(error){
console.log('erro sincronizado o banco de dados', error);
    }
}
//Aciona a sincronizacao com o banco de dados 
ApplyMigrations();
var port = "3000";
app.listen(port);
console.log("Sistema rodando na porta 3000");
module.exports = app;
