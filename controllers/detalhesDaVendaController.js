class DetalhesDaVendaController {
    constructor(DetalhesDaVendaService) {
      this.DetalhesDaVendaService = DetalhesDaVendaService;
    }
  
    async criar(req, res) {
      const { vendaId, produtoId, qtVendida, precoUnitarioDeVenda } = req.body;
      try {
        const detalhesDaVenda = await this.DetalhesDaVendaService.criar(
          vendaId,
          produtoId,
          qtVendida,
          precoUnitarioDeVenda
        );
        res.status(201).json(detalhesDaVenda);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async buscarPorId(req, res) {
      try {
        const detalhesDaVenda = await this.DetalhesDaVendaService.buscarPorId(req.params.id);
        res.status(200).json(detalhesDaVenda);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    }
  
    async listarTodas(req, res) {
      try {
        const detalhesDasVendas = await this.DetalhesDaVendaService.listarTodas();
        res.status(200).json(detalhesDasVendas);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async atualizar(req, res) {
      try {
        const detalhesDaVenda = await this.DetalhesDaVendaService.atualizar(req.params.id, req.body);
        res.status(200).json(detalhesDaVenda);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async deletar(req, res) {
      const { id } = req.params;
      try {
        const detalhesDaVenda = await this.DetalhesDaVendaService.deletar(id);
        res.status(200).json(detalhesDaVenda);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    }
  }
  
  module.exports = DetalhesDaVendaController;
  