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
    try {
      const depositos = await DepositoService.listarTodos(req.headers.authorization);
      res.json(depositos);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }


}
module.exports = DepositoController