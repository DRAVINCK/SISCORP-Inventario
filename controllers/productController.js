// controllers/ProductController.js

class ProductController {
  async listarTodos(req, res) {
    try {
      const products = await ProductService.listarTodos(req.headers.authorization);
      res.json(products);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  // Adicione mais métodos conforme necessário
}
module.exports = ProductController