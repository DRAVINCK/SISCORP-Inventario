// models/Requisicao.js
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const Requisicao = sequelize.define('Requisicao', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    usuarioId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
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
      allowNull: false
    },
    centroDeCustoId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'CentroDeCustos',
        key: 'id'
      },
      allowNull: false
    },
    depositoId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Depositos',
        key: 'id'
      },
      allowNull: false
    },
    status: {
      type: Sequelize.ENUM('pendente', 'atendida', 'cancelada'),
      defaultValue: 'pendente'
    }
  });

  Requisicao.associate = function(models) {
    Requisicao.belongsTo(models.User, { foreignKey: 'usuarioId', as: 'usuario' });
    Requisicao.belongsTo(models.Produto, { foreignKey: 'produtoId', as: 'produto' });
    Requisicao.belongsTo(models.CentroDeCusto, { foreignKey: 'centroDeCustoId', as: 'centroDeCusto' });
    Requisicao.belongsTo(models.Deposito, { foreignKey: 'depositoId', as: 'deposito' });
  };

  return Requisicao;
};