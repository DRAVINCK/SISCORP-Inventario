//cotrollers/titulosController.js

class TitulosController {
    constructor(tituloService) {  
        this.tituloService = tituloService;
    }

    async criar(req, res) {
        const { NotaFiscal, NParcela, VlorOriginal, DtVcto, Situacao } = req.body;
        try {
            const titulo = await this.tituloService.criar(
                NotaFiscal, 
                NParcela, 
                VlorOriginal, 
                DtVcto, 
                Situacao
            );
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

    async buscarPorId(req, res) {
        const { id } = req.params;
        try {
            const titulos = await this.tituloService.buscarPorId(id);
            res.status(200).json(titulos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar o título.' });
        }
    }

    async atualizar(req, res) {
        const { id } = req.params;
        const { NotaFiscal, NParcela, VlorOriginal, DtVcto, Situacao } = req.body;
        try {
            const titulos = await this.tituloService.atualizar(
                id, 
                NotaFiscal, 
                NParcela, 
                VlorOriginal, 
                DtVcto, 
                Situacao
            );
            res.status(200).json(titulos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar o título.' });
        }
    }

    async deletar(req, res) {
        const { id } = req.params;
        try {
            const deletado = await this.tituloService.deletar(id);
            res.status(200).json({ deletado });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar o título.' });
        }
    }
}
module.exports = TitulosController;