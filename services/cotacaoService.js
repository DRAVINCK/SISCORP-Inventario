// Service/cotacaoService.js

const db = require('../models');

class CotacaoService {
    constructor(CotacaoModel) {
      this.Cotacao = CotacaoModel;
    }
  
    async criar(produtoId, fornecedorId, compradorId, precoProposto, dataCotacao, dataValidade) {
      try {
        const novaCotacao = await this.Cotacao.create({
          ProdutoId: produtoId,
          FornecedorId: fornecedorId,
          CompradorId: compradorId,
          precoProposto,
          dataCotacao,
          dataValidade
        });
        return novaCotacao;
      } catch (error) {
        throw error;
      }
    }
  
    async listarTodas() {
      try {
        const cotacoes = await this.Cotacao.findAll({
          include: [
              { model: db.Produto, as: 'produto' },
              { model: db.Fornecedor, as: 'fornecedor' },
              {
                model: db.User,
                as: 'comprador',
                attributes: ['id', 'nome'] // Apenas 'id' e 'nome' do comprador
              }
            ]
        });
        return cotacoes;
      } catch (error) {
        throw error;
      }
    }
  
    async buscarPorId(id) {
      try {
        const cotacao = await this.Cotacao.findOne({
          where: { id },
        include: [
          { model: db.Produto, as: 'produto' },
          { model: db.Fornecedor, as: 'fornecedor' },
          {
            model: db.User,
            as: 'comprador',
            attributes: ['id', 'nome'] // Apenas 'id' e 'nome' do comprador
          }
        ]
        });
        return cotacao ? cotacao : null;
      } catch (error) {
        throw error;
      }
    }
  
    async atualizar(id, produtoId, fornecedorId, compradorId, precoProposto, dataCotacao,  dataValidade) {
      try {
        const cotacao = await this.Cotacao.findOne({ where: { id } });
        if (cotacao) {
          cotacao.ProdutoId = produtoId;
          cotacao.FornecedorId = fornecedorId;
          cotacao.CompradorId = compradorId;
          cotacao.precoProposto = precoProposto;
          cotacao.dataCotacao = dataCotacao;
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
  