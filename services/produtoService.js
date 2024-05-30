const jwt = require('jsonwebtoken');

class ProdutoService {
    constructor(ProdutoModel) {
      this.Produto = ProdutoModel
    }

    async cadastrarProduto(nome, ativo) {

      try{
          const produto = await this.Produto.create(
            {
              nome:nome,
              ativo:ativo
            }
          );
        return produto ? produto : null;
      }
      catch (error) {
        throw new Error('Token inválido');
      }
    }
  
    async listarTodos(token) {
      try {
        const decoded = jwt.verify(token, '123');
        if (decoded) {
          const produtos = await this.Produto.findAll();
          return produtos ? produtos : null;
        } else {
          throw new Error('Token inválido');
        }
      } catch (error) {
        throw error;
      }
    }
 
  }
  module.exports = ProdutoService
