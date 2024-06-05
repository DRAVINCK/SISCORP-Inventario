<<<<<<< HEAD
// models/Produto.js
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const Produto = sequelize.define('Produto', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    },
    valorUnitario: {
      type: Sequelize.FLOAT,
      allowNull: false
    }
  });

  Produto.associate = function(models) {
    Produto.belongsToMany(models.Deposito, {
      through: models.DepositoProduto,
      foreignKey: 'produtoId',
      as: 'depositos'
    });
  };

  return Produto;
};
=======
<<<<<<<< HEAD:models/Fornecedor.js
const Sequelize = require('sequelize');

module.exports = (sequelize) =>{
const Fornecedor = sequelize.define('Fornecedor', {
========


const Sequelize = require('sequelize');
module.exports = (sequelize) =>{
const Produto = sequelize.define('Produto', {
>>>>>>>> main:models/Produto.js
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
<<<<<<<< HEAD:models/Fornecedor.js
    cnpj:{
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    }
});
return Fornecedor;
};
========
    ativo:{
        type: Sequelize.FLOAT,
        allowNull: false,
    }
});
return Produto;
};
>>>>>>>> main:models/Produto.js
>>>>>>> main
