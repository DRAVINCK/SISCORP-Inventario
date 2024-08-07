//services/titulosService.js

const jwt = require('jsonwebtoken');

class TituloService {
    constructor(TituloModel) {
        this.Titulo = TituloModel;
    }

    async criar(NotaFiscal, NParcela, VlorOriginal, DtVcto, token) {
        let Situacao = "Aberto";
        try {
            const decoded = jwt.verify(token, '123');
            if (!decoded) {
                throw new Error('Token inválido');
            }
            const titulo = await this.Titulo.create(
                {
                    NotaFiscal,
                    NParcela,
                    VlorOriginal,
                    DtVcto,
                    Situacao
                });
            return titulo ? titulo : null;
        } catch (error) {
            return error;
        }
    }

    async listarTodos(token) {
        try {
            const decoded = jwt.verify(token, '123');
            if (!decoded) {
                throw new Error('Token inválido');
            }
            const titulo = await this.Titulo.findAll();
            return titulo;
        } catch (error) {
            throw error;
        }
    }

    async buscarPorId(id, token) {
        try {
            const decoded = jwt.verify(token, '123');
            if (!decoded) {
                throw new Error('Token inválido');
            }
            const titulo = await this.Titulo.findOne({ where: { id } });
            return titulo;
        } catch (error) {
            throw error;
        }
    }

    async atualizar(id, NotaFiscal, NParcela, VlorOriginal, DtVcto, Situacao, token) {
        try {
            const decoded = jwt.verify(token, '123');
            if (!decoded) {
                throw new Error('Token inválido');
            }
            const titulo = await this.Titulo.findOne({ where: { id } })
            if (titulo) {
                titulo.NotaFiscal = NotaFiscal;
                titulo.NParcela = NParcela;
                titulo.VlorOriginal = VlorOriginal;
                titulo.DtVcto = DtVcto;
                titulo.Situacao = Situacao;
                await titulo.save();
                return titulo;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }

    async deletar(id, token) {
        try {
            const decoded = jwt.verify(token, '123');
            if (!decoded) {
                throw new Error('Token inválido');
            }
            const titulo = await this.Titulo.findOne({ where: { id } });

            if (titulo) {
                await titulo.destroy();
                return true;
            }
            return false;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TituloService;