// controllers/DepositoController.js

class DepositoController {
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