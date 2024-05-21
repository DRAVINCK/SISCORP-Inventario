const jwt = require('jsonwebtoken');

class ProductService {
    constructor(ProductModel) {
      this.Product = ProductModel
    }

    async cadastrarProduto(nome, ativo) {

      try{
          const product = await this.Product.create(
            {
              nome:nome,
              ativo:ativo
            }
          );
        return product ? product : null;
      }
      catch (error) {
        throw new Error('Token inválido');
      }
    }
  
    async listarTodos(token) {
      try {
        const decoded = jwt.verify(token, '123');
        if (decoded) {
          const products = await this.Product.findAll();
          return products ? products : null;
        } else {
          throw new Error('Token inválido');
        }
      } catch (error) {
        throw error;
      }
    }
 
  }
  module.exports = ProductService
