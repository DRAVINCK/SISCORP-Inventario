// services/requisicaoService.js
const db = require('../models');
const DepositoService = require('./depositoService');
const DepositoServiceInstance = new DepositoService(db.Deposito, db.DepositoProduto);

class RequisicaoService {
  constructor(RequisicaoModel) {
    this.Requisicao = RequisicaoModel;
  }

  async criar(usuarioId, produtoId, quantidade, centroDeCustoId, depositoId) {
    try {
      const disponibilidade = await DepositoServiceInstance.verificarDisponibilidade(depositoId, produtoId, quantidade);
      let status = 'pendente';

      if (disponibilidade) {
        const atualizar = await DepositoServiceInstance.atualizarEstoque(depositoId, produtoId, quantidade);
        if (atualizar) {
          status = 'atendida';
        } 
      }

      const requisicao = await this.Requisicao.create({
        usuarioId,
        produtoId,
        quantidade,
        centroDeCustoId,
        depositoId,
        status
      });
      return requisicao ? requisicao : null;
    } catch (error) {
      throw error.message;
    }
  }

  async cancelar(id) {
    try {
      const requisicao = await this.Requisicao.findByPk(id);
      if (requisicao && requisicao.status === 'pendente') {
        requisicao.status = 'cancelada';
        await requisicao.save();
        return requisicao;
      }
      throw new Error('Requisição não encontrada ou não pode ser cancelada');
    } catch (error) {
      throw error;
    }
  }

  async listarTodas() {
    try {
      const requisicao = await this.Requisicao.findAll({
        include: ['usuario', 'produto', 'centroDeCusto', 'deposito']
      });
      
      return requisicao ? requisicao : null;
      
    } catch (error) {
      throw error;
    }
  }
}

module.exports = RequisicaoService;