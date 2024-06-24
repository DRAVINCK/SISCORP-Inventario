//controller/detalheVendaController.ts

class DetalheVendaController {
    
    constructor(detalheVendaService) {
        this.detalheVendaService = detalheVendaService;
    }
    
    async criar(req, res) {
        const { clienteId, numeroNotaFiscal, dataVenda, produtoId, quantidade, precoUnitario, depositoId } = req.body;
        try {
            const novoDetalheVenda = await detalheVendaService.criar(clienteId, numeroNotaFiscal, dataVenda, produtoId, quantidade, precoUnitario, depositoId);
            res.status(201).json(novoDetalheVenda);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar DetalheVenda' });
        }
    }
}

module.exports = DetalheVendaController;