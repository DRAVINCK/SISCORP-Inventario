// models/DepositoProduto.js
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const DepositoProduto = sequelize.define('DepositoProduto', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    depositoId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Depositos',
        key: 'id'
      },
      allowNull: false
    },
    produtoId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Produtos',
        key: 'id'
      },
      allowNull: false
    },
    quantidade: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  });

  DepositoProduto.associate = function(models) {
    DepositoProduto.belongsTo(models.Deposito, { foreignKey: 'depositoId', as: 'deposito' });
    DepositoProduto.belongsTo(models.Produto, { foreignKey: 'produtoId', as: 'produto' });
  };

  return DepositoProduto;
};
