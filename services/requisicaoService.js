const db = require('../models');
const DepositoService = require('./depositoService');
const DepositoServiceInstance = new DepositoService(db.Deposito, db.DepositoProduto);

class RequisicaoService {
  constructor(RequisicaoModel) {
    this.Requisicao = RequisicaoModel;
  }

  async criar(usuarioId, produtoId, quantidade, centroDeCustoId, depositoId, token) {
    let status = 'pendente'; 
    try {
      const disponibilidade = await DepositoServiceInstance.verificarDisponibilidade(depositoId, produtoId, quantidade, token)

      if (disponibilidade) {
        const atualizar = await DepositoServiceInstance.atualizarEstoque(depositoId, produtoId, quantidade, token);
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

      return requisicao;
    } catch (error) {
      throw error;
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
      const requisicoes = await this.Requisicao.findAll({
        include: ['usuario', 'produto', 'centroDeCusto', 'deposito']
      });

      return requisicoes;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = RequisicaoService;
