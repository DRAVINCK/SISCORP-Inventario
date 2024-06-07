class CotacaoController {
    constructor(CotacaoService) {
      this.CotacaoService = CotacaoService;
    }
  
    async criar(req, res) {
      const { produtoId, fornecedorId, compradorId, precoProposto, dataCotacao, dataValidade } = req.body;
      try {
        const cotacao = await this.CotacaoService.criar(produtoId, fornecedorId, compradorId, precoProposto, dataCotacao, dataValidade);
        res.status(201).json(cotacao);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao criar a cotação' });
      }
    }
  
    async listarTodas(req, res) {
      try {
        const cotacoes = await this.CotacaoService.listarTodas();
        res.status(200).json(cotacoes);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao listar cotações' });
      }
    }
  
    async buscarPorId(req, res) {
      const { id } = req.params;
      try {
        const cotacao = await this.CotacaoService.buscarPorId(id);
        if (cotacao) {
          res.status(200).json(cotacao);
        } else {
          res.status(404).json({ error: 'Cotação não encontrada' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar cotação' });
      }
    }
  
    async atualizar(req, res) {
      const { id } = req.params;
      const { produtoId, fornecedorId, compradorId, precoProposto, dataCotacao, dataValidade } = req.body;
      try {
        const cotacao = await this.CotacaoService.atualizar(id, produtoId, fornecedorId, compradorId, precoProposto, dataCotacao, dataValidade);
        if (cotacao) {
          res.status(200).json(cotacao);
        } else {
          res.status(404).json({ error: 'Cotação não encontrada' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar cotação' });
      }
    }
  
    async deletar(req, res) {
      const { id } = req.params;
      try {
        const sucesso = await this.CotacaoService.deletar(id);
        if (sucesso) {
          res.status(200).json({ mensagem: 'Cotação deletada com sucesso' });
        } else {
          res.status(404).json({ error: 'Cotação não encontrada' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar cotação' });
      }
    }
  }
  
  module.exports = CotacaoController;
  