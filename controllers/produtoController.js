// controllers/ProductController.js

const { token } = require("morgan");

class ProdutoController {
  constructor(produtoService) {
    this.produtoService = produtoService;
  }

  async cadastrarProduto(req, res) {
    const { nome, ativo } = req.body;
    try {
      const produto = await this.produtoService.cadastrarProduto( nome, ativo);
      res.status(200).json(produto);
    } catch (error) {
      res.status(500).json({ error: "Erro ao inserir o novo produto." });
    }
  }

  async listarTodos(req, res) {
    const token = req.headers.authorization;
    try {
      const produtos = await this.produtoService.listarTodos(token);
      res.status(200).json(produtos);
    } catch (error) {
      res.status(500).json({error: "Erro ao listar produtos."});
    }
  }

}
module.exports = ProdutoController
