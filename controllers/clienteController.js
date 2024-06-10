class ClienteController {
    constructor(ClienteService) {
      this.ClienteService = ClienteService;
    }
  
    async create(req, res) {
      const { cpf, nome } = req.body;
      try {
        const novoCliente = await this.ClienteService.criar(cpf, nome);
        res.status(200).json(novoCliente);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao inserir o novo cliente' });
      }
    }
  
    async listarTodos(req, res) {
      try {
        const clientes = await this.ClienteService.listarTodos();
        res.status(200).json(clientes);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao listar clientes' });
      }
    }
  
    async buscarPorId(req, res) {
      const { cpf } = req.params;
      try {
        const cliente = await this.ClienteService.buscarPorId(cpf);
        res.status(200).json(cliente);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar cliente' });
      }
    }
  
    async atualizar(req, res) {
      const { id, cpf, nome } = req.body;
      try {
        const cliente = await this.ClienteService.atualizar(id, cpf, nome);
        res.status(200).json(cliente);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar o cliente' });
      }
    }
  
    async deletar(req, res) {
      const { cpf } = req.params;
      try {
        const cliente = await this.ClienteService.deletar(cpf);
        res.status(200).json(cliente);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar cliente' });
      }
    }
  }
  module.exports = ClienteController;
  