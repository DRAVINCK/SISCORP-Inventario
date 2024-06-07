const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const Cotacao = sequelize.define('Cotacao', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    ProdutoId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Produtos',
        key: 'id'
      },
      allowNull: false
    },
    FornecedorId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Fornecedors',
        key: 'id'
      },
      allowNull: false
    },
    CompradorId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      allowNull: false
    },
    precoProposto: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    dataCotacao: {
      type: Sequelize.DATE,
      allowNull: false
    },
    dataValidade: {
      type: Sequelize.DATE,
      allowNull: false
    }
  });

  Cotacao.associate = function(models) {
    Cotacao.belongsTo(models.Produto, { foreignKey: 'ProdutoId', as: 'produto' });
    Cotacao.belongsTo(models.Fornecedor, { foreignKey: 'FornecedorId', as: 'fornecedor' });
    Cotacao.belongsTo(models.User, { foreignKey: 'CompradorId', as: 'comprador' });
  };

  return Cotacao;
};
