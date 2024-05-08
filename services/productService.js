const jwt = require('jsonwebtoken');

class ProductService {
    constructor(ProductModel) {
      this.Product = ProductModel;
    }
  
    async listarTodos(token) {
      try {
        const decoded = jwt.verify(token, '12');
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