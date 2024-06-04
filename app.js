const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const centroDeCustoRouter = require('./routes/centroDeCustoRouter');
const produtosRouter = require('./routes/produtosRouter');
const depositosRouter = require('./routes/depositoRouter');
const movimentosProdutosRouter = require('./routes/movimentoProdutoRouter');
const fornecedorRouter = require('./routes/fornecedorRouter');
const usersRouter = require('./routes/userRouter');
const cotacaoRouter = require('./routes/cotacaoRouter');
const compraRouter = require('./routes/compraRouter');

const db = require('./models'); // Importar o banco de dados
const { FORCE } = require('sequelize/lib/index-hints');

const app = express();  

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/centroDeCusto', centroDeCustoRouter);
app.use('/products', produtosRouter);
app.use('/depositos', depositosRouter);
app.use('/movimentoProdutos', movimentosProdutosRouter);
app.use('/fornecedor', fornecedorRouter);
app.use('/users', usersRouter);
app.use('/cotacao', cotacaoRouter);
app.use('/compra', compraRouter);

async function applyMigrations() {
  try {
    // Aplicando migração
    await db.CentroDeCusto.sync({ alter: true });
    await db.User.sync({ alter: true }); // User deve ser sincronizado antes de ser referenciado
    await db.Produto.sync({ alter: true });
    await db.Fornecedor.sync({ alter: true });
    await db.Deposito.sync({ alter: true });
    await db.MovimentoProduto.sync({ alter: true });
    await db.Cotacao.sync({ FORCE: true }); // Cotacao deve ser sincronizado após as tabelas referenciadas
    await db.Compra.sync({ alter: true });
    console.log("Sincronização com o banco de dados realizada");
  } catch (error) {
    console.log('Erro ao sincronizar o banco de dados', error);
  }
}

applyMigrations();

const port = 3000;
app.listen(port, () => {
  console.log(`Sistema rodando na porta ${port}`);
});

module.exports = app;
