const { Vendas, Cliente } = require('../models');

class VendasService {
  constructor(VendasModel) {
    this.Vendas = VendasModel;
  }

  async criar(numeroNotaFiscal, dataVenda, clienteId) {
    try {
      const venda = await this.Vendas.create({ numeroNotaFiscal, dataVenda, clienteId });
      return venda;
    } catch (error) {
      throw new Error('Erro ao criar venda: ' + error.message);
    }
  }

  async buscarPorId(id) {
    try {
      const venda = await this.Vendas.findByPk(id, {
        include: [{ model: Cliente, as: 'cliente' }]
      });
      if (!venda) {
        throw new Error('Venda não encontrada');
      }
      return venda;
    } catch (error) {
      throw new Error('Erro ao buscar venda: ' + error.message);
    }
  }

  async listarTodas() {
    try {
      const vendas = await this.Vendas.findAll({
        include: [{ model: Cliente, as: 'cliente' }]
      });
      return vendas;
    } catch (error) {
      throw new Error('Erro ao buscar vendas: ' + error.message);
    }
  }

  async atualizar(id, numeroNotaFiscal, dataVenda, clienteId) {
    try {
      const venda = await this.Vendas.findByPk(id);
      if (venda) {
        venda.numeroNotaFiscal = numeroNotaFiscal;
        venda.dataVenda = dataVenda;
        venda.clienteId = clienteId;
        await venda.save();
        return venda;
      }
      return null;
    } catch (error) {
      throw new Error('Erro ao atualizar venda: ' + error.message);
    }
  }

  async deletar(id) {
    try {
      const venda = await this.Vendas.findByPk(id);
      if (!venda) {
        throw new Error('Venda não encontrada');
      }
      await venda.destroy();
      return venda;
    } catch (error) {
      throw new Error('Erro ao deletar venda: ' + error.message);
    }
  }
}

module.exports = VendasService;
