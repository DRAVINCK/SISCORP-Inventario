// models/Cotacao.js
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const Cotacao = sequelize.define('Cotacao', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
<<<<<<< HEAD
    ProdutoId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Produtos',
=======
    produtoId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Produto',
>>>>>>> main
        key: 'id'
      },
      allowNull: false
    },
<<<<<<< HEAD
    FornecedorId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Fornecedors',
=======
    fornecedorId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Fornecedor',
>>>>>>> main
        key: 'id'
      },
      allowNull: false
    },
<<<<<<< HEAD
    CompradorId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users', 
        key: 'id'
      },
    },
=======
>>>>>>> main
    precoProposto: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    dataCotacao: {
      type: Sequelize.DATE,
      allowNull: false
    },
<<<<<<< HEAD
=======
    compradorId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'User', 
        key: 'id'
      },
      allowNull: false
    },
>>>>>>> main
    dataValidade: {
      type: Sequelize.DATE,
      allowNull: false
    }
  });

<<<<<<< HEAD
Cotacao.associate = function(models) {
  Cotacao.belongsTo(models.Produto, { foreignKey: 'ProdutoId', as: 'produto'});
  Cotacao.belongsTo(models.Fornecedor, { foreignKey: 'FornecedorId', as: 'fornecedor' });
  Cotacao.belongsTo(models.User, { foreignKey: 'CompradorId', as: 'user' });
};
=======
  Cotacao.associate = function(models) {
    Cotacao.belongsTo(models.Produto, { foreignKey: 'produtoId', as: 'produto' });
    Cotacao.belongsTo(models.Fornecedor, { foreignKey: 'fornecedorId', as: 'fornecedor' });
    Cotacao.belongsTo(models.User, { foreignKey: 'compradorId', as: 'comprador' });
  };
>>>>>>> main

  return Cotacao;
};
