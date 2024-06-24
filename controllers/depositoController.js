const db = require("../models");

// controllers/DepositoController.js
class DepositoController {
  constructor(DepositoService) {
    this.DepositoService = DepositoService;
  }

  async criarDeposito(req, res) {
    const { nome } = req.body;
    try {
      const deposito = await this.DepositoService.criarDeposito(nome, req.headers.authorization);
      res.status(200).json(deposito);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar depósito' });
    }
  }

  async adicionarProduto(req, res) {
    const { depositoId, produtoId, quantidade } = req.body;
    try {
      const depositoProduto = await this.DepositoService.adicionarProduto(
        depositoId, produtoId, quantidade, req.headers.authorization
      );
      res.status(200).json(depositoProduto);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao adicionar produto ao depósito' });
    }
  }

  async listarProdutos(req, res) {
    const { id } = req.params;
    try {
      const produtos = await this.DepositoService.listarProdutos(id, req.headers.authorization);
      res.status(200).json(produtos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar produtos do depósito' });
    }
  }

  async listarDepositos(req, res) {
    try {
      const depositos = await this.DepositoService.listarDepositos(req.headers.authorization);
      res.status(200).json(depositos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar depósitos' });
    }
  }

  async verificarDisponibilidade(req, res) {
    const { depositoId, produtoId, quantidade } = req.query;
    try {
      const disponivel = await this.DepositoService.verificarDisponibilidade(
        depositoId, produtoId, quantidade, req.headers.authorization
      );  

      res.status(200).json({ disponivel});
    } catch (error) {
      res.status(500).json({ error: 'Erro ao verificar disponibilidade' });
    }
  }
}

module.exports = DepositoController;
