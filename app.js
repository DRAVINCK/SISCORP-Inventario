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
const requisicaoRouter = require('./routes/requisicaoRouter');
const compraRouter = require('./routes/compraRouter');
const clienteRouter = require('./routes/clienteRouter');
const vendasRouter = require('./routes/vendasRouter');
const db = require('./models'); // Importar o banco de dados

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/centroDeCusto', centroDeCustoRouter);
app.use('/produtos', produtosRouter);
app.use('/depositos', depositosRouter);
app.use('/movimentoProdutos', movimentosProdutosRouter);
app.use('/fornecedor', fornecedorRouter);
app.use('/users', usersRouter);
app.use('/cotacao', cotacaoRouter);
app.use('/requisicao', requisicaoRouter);
app.use('/compra', compraRouter);
app.use('/cliente', clienteRouter);
app.use('/vendas', vendasRouter);

async function applyMigrations() {
  try {
    await db.CentroDeCusto.sync({ alter: true });
    await db.User.sync({ alter: true });
    await db.Produto.sync({ alter: true });
    await db.Fornecedor.sync({ alter: true });
    await db.Deposito.sync({ alter: true });
    await db.DepositoProduto.sync({ alter: true });
    await db.MovimentoProduto.sync({ alter: true });
    await db.Cotacao.sync({ alter: true });
    await db.Requisicao.sync({ alter: true });
    await db.Compra.sync({ alter: true });
    await db.Cliente.sync({ alter: true });
    await db.Vendas.sync({ alter: true });
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
