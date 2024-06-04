// services/depositoService.js
const db = require('../models');

class DepositoService {
    constructor(DepositoModel, DepositoProdutoModel) {
        this.Deposito = DepositoModel;
        this.DepositoProduto = DepositoProdutoModel;
    }

    async criarDeposito(nome) {
        try {
            const depositoExistente = await this.Deposito.findOne({ where: { nome } });

            if (depositoExistente) {
                throw new Error('Depósito já cadastrado');
            }

            const novoDeposito = await this.Deposito.create({ nome });

            return novoDeposito ? novoDeposito : null;
        } catch (error) {
            throw error;
        }
    }

    async adicionarProduto(depositoId, produtoId, quantidade) {
        try {
            let depositoProduto = await this.DepositoProduto.findOne(
                {
                    where: { depositoId, produtoId }
                });

            if (depositoProduto) {
                depositoProduto.quantidade += quantidade;
                await depositoProduto.save();
            } else {
                depositoProduto = await this.DepositoProduto.create(
                    {
                        depositoId,
                        produtoId,
                        quantidade
                    });
            }
            return depositoProduto;
        } catch (error) {
            throw error;
        }
    }

    async listarProdutos(depositoId) {
        try {
            const produtos = await this.DepositoProduto.findAll(
                {
                    where: { depositoId },
                    include: [{ model: db.Produto, as: 'produto' }]
                });

            return produtos.map(dp => ({
                nome: dp.produto.nome,
                valorUnitario: dp.produto.valorUnitario,
                quantidade: dp.quantidade,
                valorTotal: dp.produto.valorUnitario * dp.quantidade
            }));

        } catch (error) {

        }
    }

    async listarDepositos() {
        try {
            const depositos = await this.Deposito.findAll();
            return depositos ? depositos : null;
        }
        catch (error) {
            throw error;
        }
    }

    async verificarDisponibilidade(depositoId, produtoId, quantidade) {
        try {
            const depositoProduto = await this.DepositoProduto.findOne(
                {
                    where: { depositoId, produtoId }
                });
            return depositoProduto && depositoProduto.quantidade >= quantidade;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = DepositoService;
