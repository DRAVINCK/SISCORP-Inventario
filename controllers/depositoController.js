// controllers/DepositoController.js


class DepositoController {
  constructor(DepositoService) {
    this.DepositoService = DepositoService;
  }

  async createDeposito(req, res) {
    const {nome} = req.body;
    try {
      const deposito = await this.DepositoService.createDeposito(nome);
      res.status(200).json(deposito);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao inserir o novo depósito' });
    }
  }

  async listarTodos(req, res) {
    const token = req.headers.authorization;
    try {
      const depositos = await this.DepositoService.listarTodos(token);
      res.status(200).json(depositos);
    } catch (error) {
      res.status(500).json({error: 'Erro ao listar depósitos'});
    }
  }


}
module.exports = DepositoController