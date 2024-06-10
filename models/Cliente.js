const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const Cliente = sequelize.define('Cliente', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    cpf: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  return Cliente;
};
