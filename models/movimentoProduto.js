const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const MovimentoProduto = sequelize.define('MovimentoProduto', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    DepositoId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Depositos', 
        key: 'id'
      },
      allowNull: false
    },
    ProdutoId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Products', 
        key: 'id'
      },
      allowNull: false
    },
    TipoMovimento: {
      type: Sequelize.ENUM('E_compra', 'E_devolução', 'E_assistencia', 'E_transferencia',
      'S_venda', 'S_descarte', 'S_assistencia', 'S_transferencia', 'S_devolução'),
      allowNull: false
    },
    Qtd: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    PrecoUnitario: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    
  });

  MovimentoProduto.associate = function(models) {
    MovimentoProduto.belongsTo(models.Deposito, {foreignKey: 'DepositoId', as: 'deposito'});
    MovimentoProduto.belongsTo(models.Product, {foreignKey: 'ProdutoId', as: 'produto'});
  };

  return MovimentoProduto;
};
