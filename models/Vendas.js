const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const Vendas = sequelize.define('Vendas', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    numeroNotaFiscal: {
      type: Sequelize.STRING,
      allowNull: false
    },
    dataVenda: {
      type: Sequelize.DATE,
      allowNull: false
    },
    clienteId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Clientes', // nome da tabela de referência
        key: 'id'
      },
      allowNull: false
    }
  },{ sequelize, modelName: 'Vendas' });

  Vendas.associate = (models) => {
    Vendas.belongsTo(models.Cliente, { foreignKey: 'clienteId', as: 'cliente' });
    Vendas.hasMany(models.DetalheVenda, { foreignKey: 'idVenda', as: 'detalhesVenda'});
  };
  

  return Vendas;
};
