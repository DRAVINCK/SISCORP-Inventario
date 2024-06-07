// services/compraService.js
class CompraService {
    constructor(CompraModel) {
      this.Compra = CompraModel;
    }
  
    async criar(fornecedorId, cotacaoId, produtoId, qtdAdquirida, custoUnitario,valorASerPago, situacao) {
      try {
        const novaCompra = await this.Compra.create( {
          fornecedorId, 
          cotacaoId, 
          produtoId, 
          qtdAdquirida, 
          custoUnitario, 
          valorASerPago, 
          situacao,
        });
        
        return novaCompra ? novaCompra : null;
      } catch (error) {
        return error
      }
    }
  
    async listarTodos() {
      try {
        const compras = await this.Compra.findAll();
        return compras;
      } catch (error) {
        throw error;
      }
    }

    async buscarPorId(id) {
      try {
        const compra = await this.Compra.findOne({ where: { id } });
        return compra ? compra : null;
      } catch (error) {
        throw error;
      }
    }
  
    async atualizar(id, fornecedorId, contacaoId, produtoId, qtdAdquirida, custoUnitario, valorASerPago, situacao) {
      try {
        const compra = await this.Compra.findOne({ where: { id } });
        if (compra) {
          compra.fornecedorId = fornecedorId;
          compra.contacaoId = contacaoId;
          compra.produtoId = produtoId;
          compra.qtdAdquirida = qtdAdquirida;
          compra.custoUnitario = custoUnitario;
          compra.valorASerPago = valorASerPago;
          compra.situacao = situacao;
          await compra.save();
          return compra;
        }
        return null;
      } catch (error) {
        throw error;
      }
    }
  
    async deletar(id) {
      try {
        const compra = await this.Compra.findOne({ where: { id } });
        if (compra) {
          await compra.destroy();
          return true;
        }
        return false;
      } catch (error) {
        throw error;
      }
    }
  }
  module.exports = CompraService;
  