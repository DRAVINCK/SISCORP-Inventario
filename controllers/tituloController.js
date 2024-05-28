// controllers/tituloController.js
class TituloController {
    constructor(tituloService) {
      this.tituloService = tituloService;
    }
  
    async criar(req, res) {
      const { compraId, noNotaFiscal, nParcela, valorOriginal, dtVcto, situacao } = req.body;
      try {
        const titulo = await this.tituloService.criar(compraId, noNotaFiscal, nParcela, valorOriginal, dtVcto, situacao);
        res.status(200).json(titulo);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o título.' });
      }
    }
  
    async listarTodos(req, res) {
      try {
        const titulos = await this.tituloService.listarTodos();
        res.status(200).json(titulos);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao listar os títulos.' });
      }
    }
  
    async atualizar(req, res) {
      const { id, compraId, noNotaFiscal, nParcela, valorOriginal, dtVcto, situacao } = req.body;
      try {
        const titulo = await this.tituloService.atualizar(id, compraId, noNotaFiscal, nParcela, valorOriginal, dtVcto, situacao);
        res.status(200).json(titulo);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar o título.' });
      }
    }
  
    async deletar(req, res) {
      const { id } = req.body;
      try {
        const sucesso = await this.tituloService.deletar(id);
        res.status(200).json({ sucesso });
      } catch (error) {
        res.status(500),json({ error: 'Erro ao deletar o título.' });
      }
    }
  }
  
  module.exports = TituloController;
  