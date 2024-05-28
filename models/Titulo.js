// models/Titulo.js
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const Titulo = sequelize.define('Titulo', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    compraId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Compra',
        key: 'id'
      },
      allowNull: false
    },
    noNotaFiscal: {
      type: Sequelize.STRING,
      allowNull: false
    },
    nParcela: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    valorOriginal: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    dtVcto: {
      type: Sequelize.DATE,
      allowNull: false
    },
    situacao: {
      type: Sequelize.ENUM('Pendente', 'Pago', 'Cancelado'),
      allowNull: false
    }
  });

  Titulo.associate = function(models) {
    Titulo.belongsTo(models.Compra, { foreignKey: 'compraId', as: 'compra' });
  };

  return Titulo;
};
