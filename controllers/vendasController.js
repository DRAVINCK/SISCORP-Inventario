class VendasController {
    constructor(VendasService) {
      this.VendasService = VendasService;
    }
  
    async criar(req, res) {
      const { numeroNotaFiscal, dataVenda, clienteId } = req.body;
      try {
        const venda = await this.VendasService.criar(numeroNotaFiscal, dataVenda, clienteId);
        res.status(201).json(venda);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async buscarPorId(req, res) {
      try {
        const venda = await this.VendasService.buscarPorId(req.params.id);
        res.status(200).json(venda);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    }
  
    async listarTodas(req, res) {
      try {
        const vendas = await this.VendasService.listarTodas();
        res.status(200).json(vendas);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async atualizar(req, res) {
      const { numeroNotaFiscal, dataVenda, clienteId } = req.body;
      try {
        const venda = await this.VendasService.atualizar(req.params.id, numeroNotaFiscal, dataVenda, clienteId);
        res.status(200).json(venda);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async deletar(req, res) {
      try {
        const venda = await this.VendasService.deletar(req.params.id);
        res.status(200).json(venda);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    }
  }
  
  module.exports = VendasController;
  