class MovimentoProdutoService {
    constructor(MovimentoProdutoModel) {
      this.MovimentoProduto = MovimentoProdutoModel;
    }
  
    async listarTodos(token) {
      try {
        const decoded = jwt.verify(token, '12');
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