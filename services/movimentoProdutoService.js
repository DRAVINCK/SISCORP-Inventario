class MovimentoProdutoService {
    constructor(MovimentoProdutoModel) {
      this.MovimentoProduto = MovimentoProdutoModel;
    }

    async criar(idProduto, quantidade, tipoMovimento, token) {
      try {
        const decoded = jwt.verify(token, '123');
        if (decoded) {
          const novoMovimento = await this.MovimentoProduto.create(
            {
              idProduto: idProduto,
              quantidade: quantidade,
              tipoMovimento: tipoMovimento
            }
          );
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