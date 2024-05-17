const jwt = require('jsonwebtoken');

class DepositoService {
  constructor(DepositoModel) {
    this.Deposito = DepositoModel;
  }

  async createDeposito(nome) {
    try {
      const novoDeposito = await this.Deposito.create(
        {
          nome:nome
        }
      );
      return novoDeposito ? novoDeposito : null;
    } catch (error) {
      throw error;
    }
  }

  async listarTodos(token) {
    try {
      const decoded = jwt.verify(token, '12');
      if (decoded) {
        const depositos = await this.Deposito.findAll();
        return depositos ? depositos : null;
      } else {
        throw new Error('Token inválido');
      }
    } catch (error) {
      throw error;
    }
  }
 
}
module.exports = DepositoService
