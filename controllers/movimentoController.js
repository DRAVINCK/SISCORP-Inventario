// controllers/movimentoController.js
class MovimentoController {
    constructor(movimentoService) {
      this.movimentoService = movimentoService;
    }
  
    async criar(req, res) {
      const { tituloId, dataMovimento, tipoMovimento, valorMovimento, vlrMulta, vlrJuros } = req.body;
      try {
        const movimento = await this.movimentoService.criar(tituloId, dataMovimento, tipoMovimento, valorMovimento, vlrMulta, vlrJuros);
        res.status(200).json(movimento);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o movimento.' });
      }
    }
  
    async listarTodos(req, res) {
      try {
        const movimentos = await this.movimentoService.listarTodos();
        res.status(200).json(movimentos);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao listar os movimentos.' });
      }
    }
  
    async atualizar(req, res) {
      const { id, tituloId, dataMovimento, tipoMovimento, valorMovimento, vlrMulta, vlrJuros } = req.body;
      try {
        const movimento = await this.movimentoService.atualizar(id, tituloId, dataMovimento, tipoMovimento, valorMovimento, vlrMulta, vlrJuros);
        res.status(200).json(movimento);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar o movimento.' });
      }
    }
  
    async deletar(req, res) {
      const { id } = req.body;
      try {
        const sucesso = await this.movimentoService.deletar(id);
        res.status(200).json({ sucesso });
      } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar o movimento.' });
      }
    }
  }
  
  module.exports = MovimentoController;
  