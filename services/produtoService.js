<<<<<<< HEAD
const db = require('../models');

class ProdutoService {
  constructor(produtoModel) {
    this.Produto = produtoModel;
  }

  async criar(nome, valorUnitario) {
    try {
      const novoProduto = await this.Produto.create({
        nome: nome,
        valorUnitario: valorUnitario
      });
      return novoProduto;
    } catch (error) {
      throw error;
    }
  }

  async listarTodos() {
    try {
      const produtos = await this.Produto.findAll();
      return produtos;
    } catch (error) {
      throw error;
    }
  }

  async buscarPorId(id) {
    try {
      const produto = await this.Produto.findByPk(id);
      return produto ? produto : null;
    } catch (error) {
      throw error;
    }
  }

  async atualizar(id, nome, valorUnitario) {
    try {
      const produto = await this.Produto.findByPk(id);
      if (produto) {
        produto.nome = nome;
        produto.valorUnitario = valorUnitario;
        await produto.save();
        return produto;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  async deletar(id) {
    try {
      const produto = await this.Produto.findByPk(id);
      if (produto) {
        await produto.destroy();
        return produto;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProdutoService;
=======
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
>>>>>>> main
