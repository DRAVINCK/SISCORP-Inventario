const db = require('../models');

class DetalhesDaVendaService {
  constructor(DetalhesDaVendaModel) {
    this.DetalhesDaVenda = DetalhesDaVendaModel;
  }

  async criar(vendaId, produtoId, qtVendida, precoUnitarioDeVenda) {
    try {
      const detalhesDaVenda = await this.DetalhesDaVenda.create({
        vendaId,
        produtoId,
        qtVendida,
        precoUnitarioDeVenda
      });
      return detalhesDaVenda;
    } catch (error) {
      throw new Error('Erro ao criar detalhes da venda: ' + error.message);
    }
  }

  async buscarPorId(id) {
    try {
      const detalhesDaVenda = await this.DetalhesDaVenda.findByPk(id);
      if (!detalhesDaVenda) {
        throw new Error('Detalhes da venda não encontrados');
      }
      return detalhesDaVenda;
    } catch (error) {
      throw new Error('Erro ao buscar detalhes da venda: ' + error.message);
    }
  }

  async listarTodas() {
    try {
      const detalhesDasVendas = await this.DetalhesDaVenda.findAll();
      return detalhesDasVendas;
    } catch (error) {
      throw new Error('Erro ao buscar detalhes das vendas: ' + error.message);
    }
  }

  async atualizar(id, vendaId, produtoId, qtVendida, precoUnitarioDeVenda) {
    try {
      const detalhesDaVenda = await this.DetalhesDaVenda.findByPk(id);
      if (detalhesDaVenda) {
        detalhesDaVenda.vendaId = vendaId;
        detalhesDaVenda.produtoId = produtoId;
        detalhesDaVenda.qtVendida = qtVendida;
        detalhesDaVenda.precoUnitarioDeVenda = precoUnitarioDeVenda;
        await detalhesDaVenda.save();
        return detalhesDaVenda;
      }
      return null;
    } catch (error) {
      throw new Error('Erro ao atualizar detalhes da venda: ' + error.message);
    }
  }

  async deletar(id) {
    try {
      const detalhesDaVenda = await this.DetalhesDaVenda.findByPk(id);
      if (!detalhesDaVenda) {
        throw new Error('Detalhes da venda não encontrados');
      }
      await detalhesDaVenda.destroy();
      return detalhesDaVenda;
    } catch (error) {
      throw new Error('Erro ao deletar detalhes da venda: ' + error.message);
    }
  }
}

module.exports = DetalhesDaVendaService;
