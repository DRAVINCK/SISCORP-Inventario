// controllers/MovimentoProdutoController.js

const { MovimentoProdutoService } = require('../services/movimentoProdutoService');

class MovimentoProdutoController {
  async listarTodos(req, res) {
    try {
      const movimentos = await MovimentoProdutoService.listarTodos(req.headers.authorization);
      res.json(movimentos);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  // Adicione mais métodos conforme necessário
}

module.exports = MovimentoProdutoController ;
