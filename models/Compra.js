const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const Compra = sequelize.define('Compra', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    fornecedorId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Fornecedors',
        key: 'id'
      },
      allowNull: false
    },
    compradorId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      allowNull: false
    },
    cotacao1Id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Cotacaos',
        key: 'id'
      },
      allowNull: false
    },
    cotacao2Id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Cotacaos',
        key: 'id'
      },
      allowNull: false
    },
    cotacao3Id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Cotacaos',
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
    qtdAdquirida: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    custoUnitario: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    situacao: {
      type: Sequelize.ENUM('pendente', 'encerrada', 'cancelada'),
      allowNull: false,
      defaultValue: 'pendente'
    }
  });

  Compra.associate = function(models) {
    Compra.belongsTo(models.Fornecedor, { foreignKey: 'fornecedorId', as: 'fornecedor' });
    Compra.belongsTo(models.User, { foreignKey: 'compradorId', as: 'user' });
    Compra.belongsTo(models.Cotacao, { foreignKey: 'cotacao1Id', as: 'cotacao1' });
    Compra.belongsTo(models.Cotacao, { foreignKey: 'cotacao2Id', as: 'cotacao2' });
    Compra.belongsTo(models.Cotacao, { foreignKey: 'cotacao3Id', as: 'cotacao3' });
    Compra.belongsTo(models.Produto, { foreignKey: 'produtoId', as: 'produto' });
  };

  return Compra;
};
