// controllers/MovimentoProdutoController.js

const e = require("express");

class MovimentoProdutoController {
  constructor(MovimentoProdutoService) {
    this.MovimentoProdutoService = MovimentoProdutoService;
  }

  async criar(req, res) {
    const { DepositoId, ProdutoId, TipoMovimentoENUM, Qtd, PrecoUnitario } = req.body;
    try {
      const movimento = await this.MovimentoProdutoService.criar(DepositoId, ProdutoId, TipoMovimentoENUM, Qtd, PrecoUnitario, req.headers.authorization);
      res.status(200).json(movimento);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao inserir o novo movimento' });
    }
  }


  async listarTodos(req, res) {
    const token = req.headers.authorization;
    try {
      const movimentos = await MovimentoProdutoService.listarTodos(token);
      res.status(200).json(movimentos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar movimentos' });
    }
  }


}

module.exports = MovimentoProdutoController;
