// controllers/ProductController.js

class ProductController {
  constructor(productService) {
    this.ProductService = productService;
  }

  async cadastrarProduto(req, res) {
    const { nome, ativo } = req.body;
    try {
      const product = await this.ProductService.cadastrarProduto( nome, ativo);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: "Erro ao inserir o novo produto." });
    }
  }

  async listarTodos(req, res) {
    try {
      const products = await ProductService.listarTodos(req.headers.authorization);
      res.json(products);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

}
module.exports = ProductController
