// controllers/requisicaoController.js
class RequisicaoController {
    constructor(RequisicaoService) {
      this.RequisicaoService = RequisicaoService;
    }
  
    async criar(req, res) {
      const { usuarioId, produtoId, quantidade, centroDeCustoId, depositoId } = req.body;
      try {
        const requisicao = await this.RequisicaoService.criar(
          usuarioId, 
          produtoId, 
          quantidade, 
          centroDeCustoId, 
          depositoId);
        res.status(201).json(requisicao);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao criar a requisição' });
      }
    }
  
    async cancelar(req, res) {
      const { id } = req.params;
      try {
        const requisicao = await this.RequisicaoService.cancelar(id);
        res.status(200).json(requisicao);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao cancelar a requisição' });
      }
    }
  
    async listarTodas(req, res) {
      try {
        const requisicoes = await this.RequisicaoService.listarTodas();
        res.status(200).json(requisicoes);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao listar requisições' });
      }
    }
  }
  
  module.exports = RequisicaoController;
  