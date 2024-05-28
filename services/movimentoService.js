// services/movimentoService.js
class MovimentoService {
    constructor(MovimentoModel) {
      this.Movimento = MovimentoModel;
    }
  
    async criar(tituloId, dataMovimento, tipoMovimento, valorMovimento, vlrMulta, vlrJuros) {
      try {
        const movimento = await this.Movimento.create({
          tituloId,
          dataMovimento,
          tipoMovimento,
          valorMovimento,
          vlrMulta,
          vlrJuros
        });
        return movimento;
      } catch (error) {
        throw error;
      }
    }
  
    async listarTodos() {
      try {
        const movimentos = await this.Movimento.findAll();
        return movimentos;
      } catch (error) {
        throw error;
      }
    }
  
    async atualizar(id, tituloId, dataMovimento, tipoMovimento, valorMovimento, vlrMulta, vlrJuros) {
      try {
        const movimento = await this.Movimento.findOne({ where: { id } });
        if (movimento) {
          movimento.tituloId = tituloId;
          movimento.dataMovimento = dataMovimento;
          movimento.tipoMovimento = tipoMovimento;
          movimento.valorMovimento = valorMovimento;
          movimento.vlrMulta = vlrMulta;
          movimento.vlrJuros = vlrJuros;
          await movimento.save();
          return movimento;
        }
        return null;
      } catch (error) {
        throw error;
      }
    }
  
    async deletar(id) {
      try {
        const movimento = await this.Movimento.findOne({ where: { id } });
        if (movimento) {
          await movimento.destroy();
          return true;
        }
        return false;
      } catch (error) {
        throw error;
      }
    }
  }
  
  module.exports = MovimentoService;
  