const Sequelize = require('sequelize');

module.exports = (sequelize) =>{
const Fornecedor = sequelize.define('Fornecedor', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    cnpj:{
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    }
});
return Fornecedor;
};