
const db = require('../models');
const jwt = require('jsonwebtoken');
class ProdutoService {
  constructor(produtoModel) {
    this.Produto = produtoModel;
  }

async criar(nome, ativo, token) {
    try {

      const decoded = jwt.verify(token, '123');
      if (!decoded) {
        throw new Error('Token inválido');
      }
      const novoProduto = await this.Produto.create({
        nome: nome,
        ativo: ativo
      });
      return novoProduto;
    } catch (error) {
      throw error;
    }
  }

  async listarTodos(token) {
    try {
      const decoded = jwt.verify(token, '123');
      if (!decoded) {
        throw new Error('Token inválido');
      }
      const produtos = await this.Produto.findAll();
      return produtos;
    } catch (error) {
      throw error;
    }
  }

  async buscarPorId(id, token) {
    try {
      const decoded = jwt.verify(token, '123');
      if (!decoded) {
        throw new Error('Token inválido');
      }
      const produto = await this.Produto.findByPk(id);
      return produto ? produto : null;
    } catch (error) {
      throw error;
    }
  }

  async atualizar(id, nome, ativo, token) {
    try {
      const decoded = jwt.verify(token, '123');
      if (!decoded) {
        throw new Error('Token inválido');
      }
      const produto = await this.Produto.findByPk(id);
      if (produto) {
        produto.nome = nome;
        produto.ativo = ativo;
        await produto.save();
        return produto;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  async deletar(id, token) {
    try {
      const decoded = jwt.verify(token, '123');
      if (!decoded) {
        throw new Error('Token inválido');
      }

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