
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