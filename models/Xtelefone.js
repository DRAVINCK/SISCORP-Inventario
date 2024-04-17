

const Sequelize = require('sequelize');
module.exports = (sequelize) =>{
const Xtelefone = sequelize.define('Xtelefone', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    numero:{
        type: Sequelize.STRING,
        allowNull: false,
    }
});
//Associação com User
Xtelefone.associate = (models) =>{
Xtelefone.belongsTo(sequelize.models.User,{
    foreingKey: 'userId',
});
};
return Xtelefone;

};
