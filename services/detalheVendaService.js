//service/detalheVendaService.js

class DetalheVendaService {
    constructor(DetalheVendaModel) {
        this.DetalheVenda = DetalheVendaModel;
    }

    async criar(idVenda, idProduto, quantidade, valorUnitario) {
        try {
            const novoDetalheVenda = await DetalheVenda.create({
                idVenda,
                idProduto,
                quantidade,
                valorUnitario
            });
            return novoDetalheVenda;
        } catch (error) {
            console.error('Erro ao criar DetalheVenda:', error);
            throw new Error('Erro ao criar DetalheVenda');
        }
    }

    async listarTodos() {
        try {
            const detalheVenda = await this.DetalheVenda.findAll();
            return detalheVenda;
        } catch (error) {
            throw error;
        }
    }

    async buscarPorId(id) {
        try {
            const detalheVenda = await this.DetalheVenda.findByPk(id);
            return detalheVenda;
        } catch (error) {
            throw error;
        }
    }

    async atualizar(id, idVenda, idProduto, quantidade, valorUnitario) {
        try {
            const detalheVenda = await this.DetalheVenda.findByPk(id);
            if (detalheVenda) {
                detalheVenda.idVenda = idVenda;
                detalheVenda.idProduto = idProduto;
                detalheVenda.quantidade = quantidade;
                detalheVenda.valorUnitario = valorUnitario;
                await detalheVenda.save();
                return detalheVenda;
            } else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    }
    
}
module.exports = DetalheVendaService;