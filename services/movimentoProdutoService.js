const jwt = require('jsonwebtoken');

class MovimentoProdutoService {
  constructor(MovimentoProdutoModel) {
    this.MovimentoProduto = MovimentoProdutoModel;
  }

  async criar(DepositoId, idProduto, TipoMovimentoENUM, quantidade, valorUnitario, token) {
    try {
      const decoded = jwt.verify(token, '123');
      if (decoded) {
        const novoMovimentoObj = {
          DepositoId: DepositoId,
          ProdutoId: idProduto,
          TipoMovimento: TipoMovimentoENUM,
          Qtd: quantidade,
          PrecoUnitario: valorUnitario
        };
        const novoMovimento = await this.MovimentoProduto.create(novoMovimentoObj);
        return novoMovimento ? novoMovimento : null;
      } else {
        throw new Error('Token inválido');
      }
    } catch (error) {
      throw error;
    }
  }

  async listarTodos(token) {
    try {
      const decoded = jwt.verify(token, '123');
      if (decoded) {
        const movimentos = await this.MovimentoProduto.findAll();
        return movimentos ? movimentos : null;
      } else {
        throw new Error('Token inválido');
      }
    } catch (error) {
      throw error;
    }
  }

}
module.exports = MovimentoProdutoService