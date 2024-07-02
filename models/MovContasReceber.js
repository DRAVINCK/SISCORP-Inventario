//models/MovContasReceber.js:

const Sequelize = require('sequelize');
module.exports = (sequelize) =>{
    const MovContasReceber = sequelize.define('MovContasReceber',{
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
            type: Sequelize.ENUM('Abertura', 'Pagamento', 'Cancelamento'),
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
        tableName: 'mov_contas_A_receber'
    });

    MovContasReceber.associate = (models) => {
        MovContasReceber.belongsTo(models.Titulo, { foreignKey: 'idTitulo', as: 'titulo' });
    };

    return MovContasReceber;

}