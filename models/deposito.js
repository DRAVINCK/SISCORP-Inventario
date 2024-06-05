// models/Deposito.js

const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const Deposito = sequelize.define('Deposito', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  Deposito.associate = function(models) {
    Deposito.belongsToMany(models.Produto, {
      through: models.DepositoProduto,
      foreignKey: 'depositoId',
      as: 'produtos'
    });
  };
  
  return Deposito;
};
