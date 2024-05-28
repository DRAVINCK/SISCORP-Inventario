// models/Compra.js
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const Compra = sequelize.define('Compra', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    produtoId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Products',
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
    parcelas: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    noNotaFiscal: {
      type: Sequelize.STRING,
      allowNull: false
    },
    valorASerPago: {
      type: Sequelize.FLOAT,
      allowNull: false
    }
  });

  Compra.associate = function(models) {
    Compra.belongsTo(models.Product, { foreignKey: 'produtoId', as: 'produto' });
  };

  return Compra;
};
