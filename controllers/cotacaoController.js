// controllers/cotacaoController.js

class CotacaoController {
    constructor(cotacaoService) {
        this.cotacaoService = cotacaoService;
    }
    async criar(req, res) {
        const { produtoId, fornecedorId, precoProposto, dataCotacao, compradorId, dataValidade } = req.body;
        try {
            const cotacao = await this.cotacaoService.criar(produtoId, fornecedorId, precoProposto, dataCotacao, compradorId, dataValidade);
            res.status(200).json(cotacao);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar a cotação.' });
        }
    }

    async listarTodos(req, res) {
        try {
            const cotacoes = await this.cotacaoService.listarTodos();
            res.status(200).json(cotacoes);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar as cotações.' });
        }
    }

    async atualizar(req, res) {
        const { id, produtoId, fornecedorId, precoProposto, dataCotacao, compradorId, dataValidade } = req.body;
        try {
            const cotacao = await this.cotacaoService.atualizar(id, produtoId, fornecedorId, precoProposto, dataCotacao, compradorId, dataValidade);
            res.status(200).json(cotacao);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar a cotação.' });
        }
    }

    async deletar(req, res) {
        const { id } = req.body;
        try {
            const deletado = await this.cotacaoService.deletar(id);
            res.status(200).json({ deletado });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar a cotação.' });
        }
    }
}
module.exports = CotacaoController;