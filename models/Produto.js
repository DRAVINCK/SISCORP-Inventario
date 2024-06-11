
// models/Produto.js
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const Produto = sequelize.define('Produto', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    },
    valorUnitario: {
      type: Sequelize.FLOAT,
      allowNull: false
    }
  });

  Produto.associate = function(models) {
    Produto.belongsToMany(models.Deposito, {
      through: models.DepositoProduto,
      foreignKey: 'produtoId',
      as: 'depositos'
    })
  };

  return Produto;
};
