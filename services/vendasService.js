const { where } = require('sequelize');
const { Vendas, DetalheVenda, MovimentoProduto } = require('../models');

class VendasService {
  constructor(VendaModel, DetalheVendaModel, MovimentoProdutoModel) {
    this.Venda = VendaModel || Vendas;
    this.DetalheVenda = DetalheVendaModel || DetalheVenda;
    this.MovimentoProduto = MovimentoProdutoModel || MovimentoProduto;
  }

  async cadastrarVenda(numeroNotaFiscal, dataVenda, clienteId, produtoId, quantidade, precoUnitario, depositoId) {
    const transaction = await this.Venda.sequelize.transaction();

    try {
      const venda = await this.Venda.create({
        numeroNotaFiscal,
        dataVenda,
        clienteId
      }, { transaction });

      const detalhesVenda = [];
      const movimentosProduto = [];

      const detalhe = await this.DetalheVenda.create({
        idVenda: venda.id,
        idProduto: produtoId,
        quantidade,
        valorUnitario: precoUnitario
      }, { transaction });
      detalhesVenda.push(detalhe);

      const movimento = await this.MovimentoProduto.create({
        DepositoId: depositoId,
        ProdutoId: produtoId,
        TipoMovimento: 'S_venda',
        Qtd: quantidade,
        PrecoUnitario: precoUnitario,
      }, { transaction });
      movimentosProduto.push(movimento);

      await transaction.commit();

      return { venda, detalhesVenda, movimentosProduto };
    } catch (error) {
      await transaction.rollback();
      throw new Error('Erro ao cadastrar venda: ' + error.message + console.log(error));
    }
  }

  async buscarPorId(id) {
    try {
      const venda = await this.Venda.findByPk(id, {
        include: [
          { model: Cliente, as: 'cliente' },
          { model: DetalheVenda, as: 'detalhesVenda' }
        ]
      });
      if (!venda) {
        throw new Error('Venda não encontrada');
      }
      return venda;
    } catch (error) {
      throw new Error('Erro ao buscar venda: ' + error.message);
    }
  }

  async listarTodas(page = 1, pageSize = 10) {
    try {
      const offset = (page - 1) * pageSize;
      const limit = pageSize;
      const detalhesVendaobj = await this.DetalheVenda.findByPk(vendas.id);
      const vendas = await this.Venda.findAndCountAll({
        offset,
        limit,
        include: [
          {
            model: DetalheVenda,
            as: 'detalhesVenda',
          },
        ],
      });
      console.log(JSON.stringify(vendas, null, 2));

      return {
        vendas: vendas.rows,
        DetalheVenda: detalhesVendaobj,
        totalItems: vendas.count,
        totalPages: Math.ceil(vendas.count / pageSize),
        currentPage: page,
      };
    } catch (error) {
      throw new Error('Erro ao buscar vendas: ' + error.message);
    }
  }

  async atualizar(id, numeroNotaFiscal, dataVenda, clienteId) {
    try {
      const venda = await this.Venda.findByPk(id);
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
      const venda = await this.Venda.findByPk(id);
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
