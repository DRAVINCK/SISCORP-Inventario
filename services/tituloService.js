// services/tituloService.js
class TituloService {
    constructor(TituloModel) {
      this.Titulo = TituloModel;
    }
  
    async criar(compraId, noNotaFiscal, nParcela, valorOriginal, dtVcto, situacao) {
      try {
        const titulo = await this.Titulo.create({
          compraId,
          noNotaFiscal,
          nParcela,
          valorOriginal,
          dtVcto,
          situacao
        });
        return titulo;
      } catch (error) {
        throw error;
      }
    }
  
    async listarTodos() {
      try {
        const titulos = await this.Titulo.findAll();
        return titulos;
      } catch (error) {
        throw error;
      }
    }
  
    async atualizar(id, compraId, noNotaFiscal, nParcela, valorOriginal, dtVcto, situacao) {
      try {
        const titulo = await this.Titulo.findOne({ where: { id } });
        if (titulo) {
          titulo.compraId = compraId;
          titulo.noNotaFiscal = noNotaFiscal;
          titulo.nParcela = nParcela;
          titulo.valorOriginal = valorOriginal;
          titulo.dtVcto = dtVcto;
          titulo.situacao = situacao;
          await titulo.save();
          return titulo;
        }
        return null;
      } catch (error) {
        throw error;
      }
    }
  
    async deletar(id) {
      try {
        const titulo = await this.Titulo.findOne({ where: { id } });
        if (titulo) {
          await titulo.destroy();
          return true;
        }
        return false;
      } catch (error) {
        throw error;
      }
    }
  }
  
  module.exports = TituloService;
  