// controllers/ProductController.js

const { token } = require("morgan");

class ProductController {
  constructor(productService) {
    this.productService = productService;
  }

  async cadastrarProduto(req, res) {
    const { nome, ativo } = req.body;
    try {
      const product = await this.productService.cadastrarProduto( nome, ativo);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: "Erro ao inserir o novo produto." });
    }
  }

  async listarTodos(req, res) {
    const token = req.headers.authorization;
    try {
      const products = await this.productService.listarTodos(token);
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({error: "Erro ao listar produtos."});
    }
  }

}
module.exports = ProductController
