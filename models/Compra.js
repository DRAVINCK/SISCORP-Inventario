// models/Compra.js
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const Compra = sequelize.define('Compra', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    FornecedorId:{
      type: Sequelize.INTEGER,
      references: {
        model: 'Fornecedors',
        key: 'id'
      },
      allowNull: false
    },
    CompradorId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      allowNull: false
    },

    CotacaoId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Cotacaos',
        key: 'id'
      }
    },
    ProdutoId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Produtos',
        key: 'id'
      },
      allowNull: false
    },
    qtdAdquirida: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    custoUnitario: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    
    valorASerPago: {
      type: Sequelize.FLOAT,
      allowNull: false
    },

    situacao: {
      type: Sequelize.ENUM('pendente', 'encerrada', 'cancelada'),
      allowNull: false
    }
  });

  Compra.associate = function(models) {
    Compra.belongsTo(models.User, { foreignKey: 'CompradorId', as: 'user' });
    Compra.belongsTo(models.Produto, { foreignKey: 'ProdutoId', as: 'produto' });
    Compra.belongsTo(models.Fornecedor, { foreignKey: 'FornecedorId', as: 'fornecedor' });
    Compra.belongsTo(models.Cotacao, { foreignKey: 'CotacaoId', as: 'cotacao' });
  };

  return Compra;
};
