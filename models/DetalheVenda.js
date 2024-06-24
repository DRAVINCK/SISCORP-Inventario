//models/Detalhevenda.js

const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const DetalheVenda = sequelize.define('DetalheVenda', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idVenda: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Vendas', // nome da tabela de referência
                key: 'id'
            },
            allowNull: false
        },
        idProduto: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Produtos', 
                key: 'id'
              },
            allowNull: false
        },
        quantidade: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        valorUnitario: {
            type: Sequelize.FLOAT,
            allowNull: false
        }
    }, { sequelize, modelName: 'DetalheVenda' });

    DetalheVenda.associate = (models) => {
        DetalheVenda.belongsTo(models.Vendas, { foreignKey: 'idVenda', as: 'venda' });
        DetalheVenda.belongsTo(models.Produto, { foreignKey: 'idProduto', as: 'produto' });
        
    };

    return DetalheVenda;
}