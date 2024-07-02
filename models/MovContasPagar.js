// models/MovContasPagar.js

const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const MovContasPagar = sequelize.define('MovContasPagar', {
    idTitulo: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Titulos', // Nome da tabela de referência
        key: 'id'
      }
    },
    dataMovimento: {
      type: Sequelize.DATE,
      allowNull: true
    },
    tipoMovimento: {
      type: Sequelize.ENUM('Abertura', 'Pagamento'),
      allowNull: false
    },
    valorMovimento: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    juros: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    multa: {
      type: Sequelize.FLOAT,
      allowNull: true
    }
  }, {
    tableName: 'mov_contas_A_pagar'
  });

  MovContasPagar.associate = (models) => {
    MovContasPagar.belongsTo(models.Titulo, { foreignKey: 'idTitulo', as: 'titulo' });
  };

  return MovContasPagar;
};
