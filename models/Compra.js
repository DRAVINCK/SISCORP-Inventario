// models/Compra.js
const Sequelize = require('sequelize');


module.exports = (sequelize) => {
  const Compra = sequelize.define('Compra', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    fornecedorId:{
      type: Sequelize.INTEGER,
      references: {
        model: 'Fornecedor',
        key: 'id'
      },
      allowNull: false
    },
    compradorId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      },
      allowNull: false
    },

    cotacaoId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Cotacao',
        key: 'id'
      }
    },
    produtoId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Produto',
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
    Compra.belongsTo(models.User, { foreignKey: 'compradorId', as: 'comprador' });
    Compra.belongsTo(models.Produto, { foreignKey: 'produtoId', as: 'produto' });
    Compra.belongsTo(models.Fornecedor, { foreignKey: 'fornecedorId', as: 'fornecedor' });
    Compra.belongsTo(models.Cotacao, { foreignKey: 'cotacaoId', as: 'cotacao' });
  };

  return Compra;
};
