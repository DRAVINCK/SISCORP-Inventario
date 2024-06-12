//controllers/MovContasPagarController.js

class MovContasPagarController{
    constructor(movContasPagarService){
        this.movContasPagarService = movContasPagarService;
    }
    
    async criar(req,res) {
            const {idTitulo, dataMovimento,tipoMovimento, valorMovimento, multa, juros} = req.body;
            try{
                const novoMovimentoC = await this.movContasPagarService.criar(
                    idTitulo,
                    dataMovimento,
                    tipoMovimento,
                    valorMovimento,
                    multa,
                    juros
                );
                res.status(200).json(novoMovimentoC);
            }catch(error){
                res.status(500).json({error: error.message})
            }
    }

    async listarTodos(req,res){
        try{
            const movContasPagar = await this.movContasPagarService.listarTodos();
            res.status(200).json(movContasPagar);
        }catch(error){
            res.status(500).json({error: error.message})
        }
    }

    async buscarPorId(req,res){
        const {id} = req.params;
        try{
            const movContasPagar = await this.movContasPagarService.buscarPorId(id);
            res.status(200).json(movContasPagar);
        }catch(error){
            res.status(500).json({error: error.message})
        }
    }

    async atualizar(req,res){
        const {id} = req.params;
        const {idTitulo, dataMovimento,tipoMovimento, valorMovimento, multa, juros} = req.body;
        try{
            const movContasPagar = await this.movContasPagarService.atualizar(
                id,
                idTitulo,
                dataMovimento,
                tipoMovimento,
                valorMovimento,
                multa,
                juros
            );
            res.status(200).json(movContasPagar);
        }catch(error){
            res.status(500).json({error: error.message})
        }
    }  
    
    async deletar(req,res){
        const {id} = req.params;
        try{
            const movContasPagar = await this.movContasPagarService.deletar(id);
            res.status(200).json(movContasPagar);
        }catch(error){
            res.status(500).json({error: error.message})
        }
    }

    
}
module.exports = MovContasPagarController;