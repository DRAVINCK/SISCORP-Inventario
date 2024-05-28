// controllers/compraController.js
class CompraController {
    constructor(compraService) {
      this.compraService = compraService;
    }
  
    async criar(req, res) {
      const { produtoId, qtdAdquirida, custoUnitario, parcelas, noNotaFiscal, valorASerPago } = req.body;
      try {
        const compra = await this.compraService.criar(produtoId, qtdAdquirida, custoUnitario, parcelas, noNotaFiscal, valorASerPago);
        res.status(200).json(compra);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao criar a compra.' });
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
  
    async atualizar(req, res) {
      const { id, produtoId, qtdAdquirida, custoUnitario, parcelas, noNotaFiscal, valorASerPago } = req.body;
      try {
        const compra = await this.compraService.atualizar(id, produtoId, qtdAdquirida, custoUnitario, parcelas, noNotaFiscal, valorASerPago);
        res.status(200).json(compra);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar a compra.' });
      }
    }
  
    async deletar(req, res) {
      const { id } = req.body;
      try {
        const sucesso = await this.compraService.deletar(id);
        res.status(200).json({ sucesso });
      } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar a compra.' });
      }
    }
  }
  
  module.exports = CompraController;
  