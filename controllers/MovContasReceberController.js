//controller/MovContasReceberController.js

class MovContasReceberController {
    constructor(movContasReceberService) {
        this.movContasReceberService = movContasReceberService;
    }

    async criar(req, res) {
        const { idTitulo, dataMovimento, valorMovimento, multa, juros } = req.body;
        try {
            const novoMovimentoR = await this.movContasReceberService.criar(
                idTitulo,
                dataMovimento,
                valorMovimento,
                multa,
                juros,
                req.headers.authorization
            );
            res.status(200).json(novoMovimentoR);
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async listarTodos(req, res) {
        try {
            const movContasReceber = await this.movContasReceberService.listarTodos();
            res.status(200).json(movContasReceber);
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async buscarPorId(req, res) {
        const { id } = req.params;
        try {
            const movContasReceber = await this.movContasReceberService.buscarPorId(id);
            res.status(200).json(movContasReceber);
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async atualizar(req, res) {
        const { id } = req.params;
        const { idTitulo, dataMovimento, tipoMovimento, valorMovimento, multa, juros } = req.body;
        try {
            const movContasReceber = await this.movContasReceberService.atualizar(
                id,
                idTitulo,
                dataMovimento,
                tipoMovimento,
                valorMovimento,
                multa,
                juros,
                req.headers.authorization
            );
            res.status(200).json(movContasReceber);
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async pagarMov(req, res) {
        const { id } = req.params;
        try {
            await this.movContasReceberService.pagarMov(id, req.headers.authorization);
            const result = this.buscarPorId(id);
            res.status(200).json({ message: 'Movimento pago com sucesso!', movimento: result });
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async cancelarMov(req, res) {
        const { id } = req.params;
        try {
            await this.movContasReceberService.cancelarMov(id, req.headers.authorization);
            res.status(200).json({ message: 'Movimento cancelado com sucesso!' });
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async deletar(req, res) {
        const { id } = req.params;
        try {
            await this.movContasReceberService.deletar(id);
            res.status(200).json({ message: 'Movimento deletado com sucesso!' });
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

}
module.exports = MovContasReceberController;