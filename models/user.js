// models/user.js

const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    senha: {
      type: Sequelize.STRING,
      allowNull: false
    },
    centroDeCustoId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'CentroDeCustos',
        key: 'id'
      },
      allowNull: true 
    }
  });

  User.associate = function(models) {
    User.belongsTo(models.CentroDeCusto, { foreignKey: 'centroDeCustoId', as: 'centroDeCusto' });
  };

  return User;
};

