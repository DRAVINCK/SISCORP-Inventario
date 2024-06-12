// models/Titulos.js:
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Titulo = sequelize.define('Titulo', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        NotaFiscal: {
            type: Sequelize.STRING,
            allowNull: false
        },
        NParcela: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        VlorOriginal: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        DtVcto: {
            type: Sequelize.DATE,
            allowNull: false
        },
        Situacao: {
            type: Sequelize.ENUM('Aberto', 'Pago', 'Cancelado'),
            allowNull: false
        },

    });
    return Titulo;
}
