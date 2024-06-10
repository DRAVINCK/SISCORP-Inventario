class CompraController {
  constructor(CompraService) {
    this.CompraService = CompraService;
  }

  async criar(req, res) {
    const { fornecedorId, compradorId, cotacao1Id, cotacao2Id, cotacao3Id, produtoId, qtdAdquirida, custoUnitario } = req.body;
    try {
      const compra = await this.CompraService.criar(
        fornecedorId, 
        compradorId, 
        cotacao1Id, cotacao2Id, 
        cotacao3Id, 
        produtoId, 
        qtdAdquirida, 
        custoUnitario);
      res.status(201).json(compra);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar a compra' });
    }
  }

  async listarTodas(req, res) {
    try {
      const compras = await this.CompraService.listarTodas();
      res.status(200).json(compras);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar compras' });
    }
  }

  async buscarPorId(req, res) {
    const { id } = req.params;
    try {
      const compra = await this.CompraService.buscarPorId(id);
      if (compra) {
        res.status(200).json(compra);
      } else {
        res.status(404).json({ error: 'Compra não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar compra' });
    }
  }

  async atualizarSituacao(req, res) {
    const { id } = req.params;
    const { situacao } = req.body;
    try {
      const compra = await this.CompraService.atualizarSituacao(id, situacao);
      if (compra) {
        res.status(200).json(compra);
      } else {
        res.status(404).json({ error: 'Compra não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar situação da compra' });
    }
  }

  async deletar(req, res) {
    const { id } = req.params;
    try {
      const sucesso = await this.CompraService.deletar(id);
      if (sucesso) {
        res.status(200).json({ mensagem: 'Compra deletada com sucesso' });
      } else {
        res.status(404).json({ error: 'Compra não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar compra' });
    }
  }
}

module.exports = CompraController;
