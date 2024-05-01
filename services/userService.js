//. /services/userService.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

class userService{
    constructor(userModel){
        this.User = userModel 
    }
    async cadastrar(nome, email, senha){
        try{
            const hashedPassword = await bcrypt.hash(senha, saltRounds);
            const novoUser = await this.User.create(
            {
                    nome:nome,
                    email:email, 
                    senha:hashedPassword
                 }
            );
            novoUser.senha='';
            return novoUser ? novoUser : null;
        }
        catch(error){
            throw error; 
        }
    }
    async localizarUsuarioPeloLogin(email,senha){
        try{
            const user = await this.User.findOne({ where: { email: email } });
            if (user && await bcrypt.compare(senha, user.senha)) {
                const token = jwt.sign({id: user.id }, 'sua chave secreta', {expiresIn:'1h'});
                user.senha='';
                return {user,token};
            } else {
                return null;
            }
        }
        catch(error){
            throw error;
        }
    }
    async localizarUsuarioPeloId(id){
        try{
            const idUser = await this.User.findOne({ where: { id: id } });
            idUser.senha='';
            return idUser;
        }
        catch(error){
            throw error;
        }
    }

    async listarTodos(token){
        try{
            const decoded = jwt.verify(token, 'sua chave secreta');
            if(decoded){
                const users = await this.User.findAll();
                return users ? users : null;
            } else {
                throw new Error('Token inválido');
            }
        }
        catch(error){
            throw error;
        }
    }
}
module.exports = userService
