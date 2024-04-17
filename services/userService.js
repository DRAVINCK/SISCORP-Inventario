//. /services/userService.js

class userService{ //criando a service da user
//construtor da classe recebe a user model
constructor(userModel){
    this.User = userModel 

    }
    async cadastrar(nome, email, senha){
        try{ //metodo service para inserir no banco
            const novoUser = await this.User.create( //Só avança uando der certo "await"
            {
                    nome:nome,
                    email:email, 
                    senha:senha
                 }
            );
            return novoUser ? novoUser : null; //if ternário, se novoUser for novoUser retorna novoUser caso contrario null
        }
        catch(error){ //se açgo der errado a service fala pra controler que nao deu 
            throw error; 
        }
    }
    //localizar usuario
    async localizarUsuarioPeloLogin(login,senha){
        try{
            const AllUsers = await this.User.findAll();
            return AllUsers? AllUsers: null;
        }
        catch(error){
            throw error;
        }
    }

    async localizarUsuarioPeloId(id){
        try{
            const idUser = await this.User.findOne();
            return idUser? idUser: null;
        }
        catch(error){
            throw error;
        }
    }
}
module.exports = userService
