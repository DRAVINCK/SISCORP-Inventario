const db = require('../models');
const jwt = require('jsonwebtoken');

class DepositoService {
  constructor(DepositoModel, DepositoProdutoModel) {
    this.Deposito = DepositoModel;
    this.DepositoProduto = DepositoProdutoModel;
  }

  async criarDeposito(nome, token) {
    try {
      const decoded = jwt.verify(token, '123');
      if (!decoded) {
        throw new Error('Token inválido');
      }
      const novoDeposito = await this.Deposito.create({ nome });
      return novoDeposito ? novoDeposito : null;
    } catch (error) {
      throw error;
    }
  }

  async adicionarProduto(depositoId, produtoId, quantidade, token) {
    try {
      const decoded = jwt.verify(token, '123');
      if (!decoded) {
        throw new Error('Token inválido');
      }
      let depositoProduto = await this.DepositoProduto.findOne(
        { 
          where: { depositoId, produtoId } 
        });
      if (depositoProduto) {
        depositoProduto.quantidade += quantidade;
        await depositoProduto.save();
      } else {
        depositoProduto = await this.DepositoProduto.create(
          { 
            depositoId, 
            produtoId, 
            quantidade 
          });
      }
      return depositoProduto;
    } catch (error) {
      throw error;
    }
  }

  async listarProdutos(depositoId, token) {
    try {
      const decoded = jwt.verify(token, '123');
      if (!decoded) {
        throw new Error('Token inválido');
      }
      const produtos = await this.DepositoProduto.findAll({
        where: { depositoId },
        include: [{ model: db.Produto, as: 'produto' }]
      });

      return produtos.map(dp => ({
        id: dp.produto.id,
        nome: dp.produto.nome,
        valorUnitario: dp.produto.valorUnitario,
        quantidade: dp.quantidade,
      }));
    } catch (error) {
      throw error;
    }
  }

  async listarDepositos(token) {
    try {
      const decoded = jwt.verify(token, '123');
      if (!decoded) {
        throw new Error('Token inválido');
      }
      const depositos = await this.Deposito.findAll();
      return depositos ? depositos : null;
    } catch (error) {
      throw error;
    }
  }

  async verificarDisponibilidade(depositoId, produtoId, quantidade, token) {
    try {
        const decoded = jwt.verify(token, '123');
        if (!decoded) {
            throw new Error('Token inválido');
        }

        const depositoProduto = await this.DepositoProduto.findOne({
            where: { depositoId, produtoId }
        });

        const disponivel = depositoProduto && depositoProduto.quantidade >= quantidade;

        return {
          disponivel,
          depositoProduto
        };
    } catch (error) {
        throw error;
    }
}

  async atualizarEstoque(depositoId, produtoId, quantidade, token) {
    try {
      const decoded = jwt.verify(token, '123');
      if (!decoded) {
        throw new Error('Token inválido');
      }
      let depositoProduto = await this.DepositoProduto.findOne({
        where: { depositoId, produtoId }
      });

      if (!depositoProduto) {
        throw new Error('Produto não encontrado no depósito.');
      }

      depositoProduto.quantidade -= quantidade;
      await depositoProduto.save();

      return depositoProduto ? depositoProduto : null;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = DepositoService;
