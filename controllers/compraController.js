// controllers/compraController.js
class CompraController {

  constructor(compraService) {
    this.compraService = compraService;
  }

  async criar(req, res) {
    const { fornecedorId, cotacaoId, produtoId, qtdAdquirida, custoUnitario,valorASerPago, situacao } = req.body;
    try {

      const compra = await this.compraService.criar(
        fornecedorId, 
        cotacaoId, 
        produtoId, 
        qtdAdquirida, 
        custoUnitario, 
        valorASerPago,
        situacao,
      );

      res.status(200).json(compra);
    } catch (error) {
      res.status(500).send(Error('Erro ao criar a compra.'));
    }
  }

  async listarTodos(req, res) {
    try {
      const compras = await this.compraService.listarTodos();
      res.status(200).json(compras);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar as compras.' });
    }
  }

  async boscarPorId(req, res) {
    const { id } = req.body;
    try {
      const compra = await this.compraService.buscarPorId(id);
      res.status(200).json(compra);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar a compra.' });
    }
  }

  async atualizar(req, res) {
    const { id, fornecedorId, contacaoId, produtoId, qtdAdquirida, custoUnitario, valorASerPago, situacao } = req.body;
    try {

      const compra = await this.compraService.atualizar(
        id, 
        fornecedorId, 
        contacaoId, 
        produtoId, 
        qtdAdquirida, 
        custoUnitario, 
        valorASerPago, 
        situacao
      );

      res.status(200).json(compra);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar a compra.' });
    }
  }

  async deletar(req, res) {
    const { id } = req.body;
    try {
      const deletado = await this.compraService.deletar(id);
      res.status(200).json({ deletado });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar a compra.' });
    }
  }
}

module.exports = CompraController;
