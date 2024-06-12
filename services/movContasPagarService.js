//services/MovContasPagarService.js

class MovContasPagarService {
    
    constructor(MovContasPagarModel){
        this.MovContasPagar = MovContasPagarModel;
    }

    async criar( idTitulo, dataMovimento,tipoMovimento, valorMovimento, multa, juros){
        try{
            const novoMovimentoC = await this.MovContasPagar.create({
                idTitulo,
                dataMovimento,
                tipoMovimento,
                valorMovimento,
                multa,
                juros
            });
            return novoMovimentoC;
        }catch(error){
            throw error;
        }
        
    }

    async listarTodos(){
        try{
            const movContasPagar = await this.MovContasPagar.findAll();
            return movContasPagar;
        }catch(error){
            throw error;
        }
    }

    async buscarPorId(id){
        try{
            const movContasPagar = await this.MovContasPagar.findByPk(id);
            return movContasPagar;
        }catch(error){
            throw error;
        }
    }

    async atualizar(id, idTitulo, dataMovimento,tipoMovimento, valorMovimento, multa, juros){
        try{
            const movContasPagar = await this.MovContasPagar.findByPk(id);
            if(movContasPagar){
                movContasPagar.idTitulo = idTitulo;
                movContasPagar.dataMovimento = dataMovimento;
                movContasPagar.tipoMovimento = tipoMovimento;
                movContasPagar.valorMovimento = valorMovimento;
                movContasPagar.multa = multa;
                movContasPagar.juros = juros;
                await movContasPagar.save();
                return movContasPagar;
            }else{
                return null;
            }
        }catch(error){
            throw error;
        }
    }

    async deletar(id){
        try{
            const movContasPagar = await this.MovContasPagar.findByPk(id);
            if(movContasPagar){
                await movContasPagar.destroy();
                return movContasPagar;
            }else{
                return null;
            }
        }catch(error){
            throw error;
        }
    }
}
module.exports = MovContasPagarService;