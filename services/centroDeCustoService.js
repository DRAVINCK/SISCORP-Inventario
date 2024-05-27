// services/centroDeCustoService.js
class CentroDeCustoService {
    constructor(CentroDeCustoModel) {
      this.CentroDeCusto = CentroDeCustoModel;
    }
  
    async criar(nome) {
      try {
        const novoCentro = await this.CentroDeCusto.create({ nome });
        return novoCentro ? novoCentro : null;
      } catch (error) {
        throw error;
      }
    }
  
    async listarTodos() {
      try {
        const centros = await this.CentroDeCusto.findAll();
        return centros ? centros : null;
      } catch (error) {
        throw error;
      }
    }
  
    async atualizar(id, nome) {
      try {
        const centro = await this.CentroDeCusto.findOne({ where: { id } });
        if (centro) {
          centro.nome = nome;
          await centro.save();
          return centro;
        }
        return null;
      } catch (error) {
        throw error;
      }
    }
  
    async deletar(id) {
      try {
        const centro = await this.CentroDeCusto.findOne({ where: { id } });
        if (centro) {
          await centro.destroy();
          return true;
        }
        return false;
      } catch (error) {
        throw error;
      }
    }
  }
  
  module.exports = CentroDeCustoService;
  