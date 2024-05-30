//controllers/fornecedorController.js

class fornecedorController{
    constructor(fornecedorService){
        this.fornecedorService = fornecedorService;
    }

    async criar(req, res){
        const {nome, cnpj} = req.body;
        try{
            const novoFornecedor = await this.fornecedorService.criar(nome, cnpj);
            res.status(200).json(novoFornecedor);
        } catch (error){
            res.status(500).json({error: 'Erro ao inserir o novo fornecedor'});
        }
    }

    async listarTodos(req, res){
        try{
            const fornecedores = await this.fornecedorService.listarTodos();
            res.status(200).json(fornecedores);
        } catch (error){
            res.status(500).json({error: 'Erro ao listar fornecedores'});
        }
    }

    async buscarPorId(req, res){
        const {id} = req.body;
        try{
            const fornecedor = await this.fornecedorService.buscarPorId(id);
            res.status(200).json(fornecedor);
        } catch (error){
            res.status(500).json({error: 'Erro ao buscar id'});
        }
    }

    async atualizar(req, res){  
        const {id, nome, cnpj} = req.body;
        try{
            const fornecedor = await this.fornecedorService.atualizar(id, nome, cnpj);
            res.status(200).json(fornecedor);
        } catch (error){
            res.status(500).json({error: 'Erro ao atualizar o fornecedor'});
        }
    }

    async deletar(req, res){
        const {id} = req.body;
        try{
            const fornecedor = await this.fornecedorService.deletar(id);
            res.status(200).json(fornecedor);
        } catch (error){
            res.status(500).json({error: 'Erro ao deletar fornecedor'});
        }
    }

}
module.exports = fornecedorController;