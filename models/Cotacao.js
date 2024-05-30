// models/Cotacao.js
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const Cotacao = sequelize.define('Cotacao', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    produtoId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'produto',
        key: 'id'
      },
      allowNull: false
    },
    fornecedorId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'fornecedor',
        key: 'id'
      },
      allowNull: false
    },
    precoProposto: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    dataCotacao: {
      type: Sequelize.DATE,
      allowNull: false
    },
    compradorId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'user', 
        key: 'id'
      },
      allowNull: false
    },
    dataValidade: {
      type: Sequelize.DATE,
      allowNull: false
    }
  });

  Cotacao.associate = function(models) {
    Cotacao.belongsTo(models.Produto, { foreignKey: 'produtoId', as: 'produto' });
    Cotacao.belongsTo(models.Fornecedor, { foreignKey: 'fornecedorId', as: 'fornecedor' });
    Cotacao.belongsTo(models.User, { foreignKey: 'compradorId', as: 'user' });
  };

  return Cotacao;
};
