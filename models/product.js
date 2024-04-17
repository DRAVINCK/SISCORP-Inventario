

const Sequelize = require('sequelize');
module.exports = (sequelize) =>{
const Product = sequelize.define('Product', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    preco:{
        type: Sequelize.FLOAT,
        allowNull: false,
    }
});
return Product;
};
