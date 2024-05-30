//services/cotacaoService.js
class CotacaoService {
    constructor(CotacaoModel) {
        this.Cotacao = CotacaoModel;
    }
    async criar(produtoId, fornecedorId, precoProposto, dataCotacao, compradorId, dataValidade) {
        try {
            const novaCotacao = await this.Cotacao.create(
                {
                    produtoId,
                    fornecedorId,
                    precoProposto,
                    dataCotacao,
                    compradorId,
                    dataValidade
                });

            return novaCotacao ? novaCotacao : null;
        } catch (error) {
            throw error;
        }
    }

    async listarTodos() {
        try {
            const cotacoes = await this.Cotacao.findAll();
            return cotacoes ? cotacoes : null;
        } catch (error) {
            throw error;
        }
    }

    async buscarPorId(id) {
        try {
            const cotacao = await this.Cotacao.findOne({ where: { id } });
            return cotacao ? cotacao : null;
        } catch (error) {
            throw error;
        }
    }

    async atualizar(id, produtoId, fornecedorId, precoProposto, dataCotacao, compradorId, dataValidade) {   
        try {
            const cotacao = await this.Cotacao.findOne({ where: { id } });
            if (cotacao) {
                cotacao.produtoId = produtoId;
                cotacao.fornecedorId = fornecedorId;
                cotacao.precoProposto = precoProposto;
                cotacao.dataCotacao = dataCotacao;
                cotacao.compradorId = compradorId;
                cotacao.dataValidade = dataValidade;
                await cotacao.save();
                return cotacao;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }

    async deletar(id) {
        try {
            const cotacao = await this.Cotacao.findOne({ where: { id } });
            if (cotacao) {
                await cotacao.destroy();
                return true;
            }
            return false;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CotacaoService;