const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const DetalhesDaVenda = sequelize.define('DetalhesDaVenda', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    vendaId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Vendas', // Nome da tabela de referência
        key: 'id'
      },
      allowNull: false
    },
    produtoId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Produtos', // Nome da tabela de referência
        key: 'id'
      },
      allowNull: false
    },
    qtVendida: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    precoUnitarioDeVenda: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    }
  });

  DetalhesDaVenda.associate = function(models) {
    DetalhesDaVenda.belongsTo(models.Vendas, { foreignKey: 'vendaId', as: 'venda' });
    DetalhesDaVenda.belongsTo(models.Produtos, { foreignKey: 'produtoId', as: 'produto' });
  };

  return DetalhesDaVenda;
};
