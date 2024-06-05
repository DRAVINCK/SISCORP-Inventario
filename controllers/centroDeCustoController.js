// controllers/CentroDeCustoController.js

class CentroDeCustoController {
    constructor(CentroDeCustoService) {
      this.CentroDeCustoService = CentroDeCustoService;
    }
  
    async criar(req, res) {
      const { nome } = req.body;
      try {
        const centro = await this.CentroDeCustoService.criar(nome);
        res.status(200).json(centro);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o centro de custo' });
      }
    }
  
    async listarTodos(req, res) {
      try {
        const centros = await this.CentroDeCustoService.listarTodos();
        res.status(200).json(centros);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao listar os centros de custo' });
      }
    }

    async buscarPorId(req, res) {
      const { id } = req.body;
      try {
        const centro = await this.CentroDeCustoService.buscarPorId(id);
        res.status(200).json(centro);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar o centro de custo' });
      }
    }

    async buscarPorId(req, res) {
      const { id } = req.body;
      try {
        const centro = await this.CentroDeCustoService.buscarPorId(id);
        res.status(200).json(centro);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar o centro de custo' });
      }
    }
  
    async atualizar(req, res) {
      const { id, nome } = req.body;
      try {
        const centro = await this.CentroDeCustoService.atualizar(id, nome);
        res.status(200).json(centro);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar o centro de custo' });
      }
    }
  
    async deletar(req, res) {
      const { id } = req.body;
      try {
        const deletado = await this.CentroDeCustoService.deletar(id);
        res.status(200).json({ deletado });
      } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar o centro de custo' });
      }
    }
  }
  
  module.exports = CentroDeCustoController;
  