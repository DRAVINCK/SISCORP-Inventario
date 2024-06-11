const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Compra = sequelize.define('Compra', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    produtoId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Produtos', // Nome da tabela de referência
        key: 'id'
      },
      allowNull: false
    },
    qtdAdquirida: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    custoUnitario: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    parcelas: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    noNotaFiscal: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Compra.associate = function(models) {
    Compra.belongsTo(models.Produto, { foreignKey: 'produtoId', as: 'produto' });
  };

  return Compra;
};
