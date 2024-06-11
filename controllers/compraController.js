class CompraController {
  constructor(CompraService) {
    this.CompraService = CompraService;
  }

  async criar(req, res) {
    const { produtoId, qtdAdquirida, custoUnitario, parcelas, noNotaFiscal } = req.body;
    try {
      const compra = await this.CompraService.criar(
        produtoId,
        qtdAdquirida,
        custoUnitario,
        parcelas,
        noNotaFiscal
      );
      res.status(201).json(compra);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar a compra' });
    }
  }

  async listarTodas(req, res) {
    try {
      const compras = await this.CompraService.listarTodos();
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

  async atualizar(req, res) {
    const { id } = req.params;
    const { produtoId, qtdAdquirida, custoUnitario, parcelas, noNotaFiscal } = req.body;
    try {
      const compra = await this.CompraService.atualizar(
        id,
        produtoId,
        qtdAdquirida,
        custoUnitario,
        parcelas,
        noNotaFiscal
      );
      if (compra) {
        res.status(200).json(compra);
      } else {
        res.status(404).json({ error: 'Compra não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar a compra' });
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
