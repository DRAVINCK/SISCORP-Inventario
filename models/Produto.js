

const Sequelize = require('sequelize');
module.exports = (sequelize) =>{
const Produto = sequelize.define('Produto', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    ativo:{
        type: Sequelize.FLOAT,
        allowNull: false,
    }

    
});
return Produto;
};
