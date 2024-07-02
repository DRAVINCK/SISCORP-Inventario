
class VendasController {
    constructor(VendasService) {
      this.VendasService = VendasService;
    }
  
    async cadastrarVenda(req, res) {
      const { numeroNotaFiscal, dataVenda, clienteId, produtoId, quantidade, precoUnitario, depositoId } = req.body;
      try {
        const venda = await this.VendasService.cadastrarVenda(
          numeroNotaFiscal, 
          dataVenda, clienteId, 
          produtoId, quantidade, 
          precoUnitario, depositoId, 
          req.headers.authorization
        );
        res.status(201).json(venda);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar venda' + error.message });
      }
    }
    	          
    async buscarPorId(req, res) {
      const { id } = req.params;
      try {
        const venda = await this.VendasService.buscarPorId(id);
        res.status(200).json(venda);
      } catch (error) {
        res.status(404).json({ error: error.message });
        console.log(error); 
      }
    }
  
    async listarTodas(req, res) {
      const { page = 1, pageSize = 10 } = req.query;
      
      try {
          const vendas = await this.VendasService.listarTodas(Number(page), Number(pageSize));
          res.status(200).json(vendas);
      } catch (error) {
          res.status(500).json({ error: 'Erro ao buscar vendas: ' + error.message });
      }
  }
  
    async atualizar(req, res) {
      const { numeroNotaFiscal, dataVenda, clienteId } = req.body;
      try {
        const venda = await this.VendasService.atualizar(
          req.params.id, 
          numeroNotaFiscal, 
          dataVenda, 
          clienteId,
          req.headers.authorization
        );
        res.status(200).json(venda);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    async deletar(req, res) {
      try {
        const venda = await this.VendasService.deletar(req.params.id);
        res.status(200).json(venda);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    }
  }
  
  module.exports = VendasController;
  