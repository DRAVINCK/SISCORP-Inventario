class CompraService {
  constructor(CompraModel) {
    this.Compra = CompraModel;
  }

  async criar(produtoId, qtdAdquirida, custoUnitario, parcelas, noNotaFiscal) {
    try {
      const novaCompra = await this.Compra.create({
        produtoId,
        qtdAdquirida,
        custoUnitario,
        parcelas,
        noNotaFiscal,
      });

      return novaCompra ? novaCompra : null;
    } catch (error) {
      return error;
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

  async atualizar(id, produtoId, qtdAdquirida, custoUnitario, parcelas, noNotaFiscal) {
    try {
      const compra = await this.Compra.findOne({ where: { id } });
      if (compra) {
        compra.produtoId = produtoId;
        compra.qtdAdquirida = qtdAdquirida;
        compra.custoUnitario = custoUnitario;
        compra.parcelas = parcelas;
        compra.noNotaFiscal = noNotaFiscal;
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
