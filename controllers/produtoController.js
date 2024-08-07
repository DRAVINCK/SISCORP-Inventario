//controllers/ProdutoController.js
class ProdutoController {
  constructor(ProdutoService) {
    this.ProdutoService = ProdutoService;
  }

  async criar(req, res) {

    const { nome, ativo } = req.body;
    try {
      const produto = await this.ProdutoService.criar(nome, ativo, req.headers.authorization);
      res.status(201).json(produto);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar produto' });
    }
  }

  async listarTodos(req, res) {

    try {
      const produtos = await this.ProdutoService.listarTodos(req.headers.authorization);
      res.status(200).json(produtos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar produtos' });
    }
  }

  async buscarPorId(req, res) {
    const { id } = req.params;
    try {
      const produto = await this.ProdutoService.buscarPorId(id, req.headers.authorization);
      if (produto) {
        res.status(200).json(produto);
      } else {
        res.status(404).json({ error: 'Produto não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar produto' });
    }
  }

  async atualizar(req, res) {
    const { id } = req.params;
    const { nome, valorUnitario } = req.body;
    try {
      const produto = await this.ProdutoService.atualizar(id, nome, valorUnitario, req.headers.authorization);
      if (produto) {
        res.status(200).json(produto);
      } else {
        res.status(404).json({ error: 'Produto não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
  }

  async deletar(req, res) {
    const { id } = req.params;
    try {
      const produto = await this.ProdutoService.deletar(id, req.headers.authorization);
      if (produto) {
        res.status(200).json(produto);
      } else {
        res.status(404).json({ error: 'Produto não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar produto' });
    }
  }
}

module.exports = ProdutoController;
