// models/CentroDeCusto.js
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const CentroDeCusto = sequelize.define('CentroDeCusto', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    codigo: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  });

  return CentroDeCusto;
};
