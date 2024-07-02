//service/movContasReceberService.js
const jwt = require('jsonwebtoken');

class MovContasReceberService {
    constructor(MovContasReceberModel) {
        this.MovContasReceber = MovContasReceberModel;
    }

    async criar(idTitulo, dataMovimento, valorMovimento, multa, juros, token) {
        try {
            const decoded = jwt.verify(token, "123");
            if (!decoded) {
                throw new Error('Token inválido');
            }
            const novoMovimentoR = await this.MovContasReceber.create({
                idTitulo,
                dataMovimento,
                tipoMovimento: 'Abertura',
                valorMovimento,
                multa,
                juros
            });
            return novoMovimentoR;
        }
        catch (error) {
            console.log(error);
        }
    }

    async listarTodos() {
        try {
            const movContasReceber = await this.MovContasReceber.findAll();
            return movContasReceber;
        } catch (error) {
            console.log(error);
        }
    }

    async buscarPorId(id) {
        try {
            const movContasReceber = await this.MovContasReceber.findByPk(id);
            return movContasReceber;
        } catch (error) {
            console.log(error);
        }
    }

    async atualizar(id, idTitulo, dataMovimento, tipoMovimento, valorMovimento, multa, juros, token) {
        try {
            const decoded = jwt.verify(token, "123");
            if (!decoded) {
                throw new Error('Token inválido');
            }
            const movContasReceber = await this.MovContasReceber.findByPk(id);
            if (movContasReceber) {
                movContasReceber.idTitulo = idTitulo;
                movContasReceber.dataMovimento = dataMovimento;
                movContasReceber.tipoMovimento = tipoMovimento;
                movContasReceber.valorMovimento = valorMovimento;
                movContasReceber.multa = multa;
                movContasReceber.juros = juros;
                await movContasReceber.save();
                return movContasReceber;
            } else {
                return null;
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async cancelarMov(id, token) {
        try {
            const decoded = jwt.verify(token, "123");
            if (!decoded) {
                throw new Error('Token inválido');
            }
            const movContasReceber = await this.MovContasReceber.findByPk(id);
            if (movContasReceber) {
                movContasReceber.tipoMovimento = 'Cancelamento';
                await movContasReceber.save();
                return movContasReceber;
            } else {
                return null;
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async pagarMov(id, token) {
        try {
            const decoded = jwt.verify(token, "123");
            if (!decoded) {
                throw new Error('Token inválido');
            }
            const movContasReceber = await this.MovContasReceber.findByPk(id);
            if (movContasReceber) {
                movContasReceber.tipoMovimento = 'Pagamento';
                await movContasReceber.save();
                return movContasReceber;
            } else {
                return null;
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deletar(id, token) {
        try {
            const decoded = jwt.verify(token, "123");
            if (!decoded) {
                throw new Error('Token inválido');
            }
            const movContasReceber = await this.MovContasReceber.findByPk(id);
            if (movContasReceber) {
                await movContasReceber.destroy();
                return movContasReceber;
            } else {
                return null;
            }
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = MovContasReceberService;
