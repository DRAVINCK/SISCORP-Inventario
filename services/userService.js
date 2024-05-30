// services/userService.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

class userService {
  constructor(userModel) {
    this.User = userModel;
  }

  async cadastrar(nome, email, senha, centroDeCustoId) {
    try {
      const hashedPassword = await bcrypt.hash(senha, saltRounds);
      const novoUser = await this.User.create({
        nome: nome,
        email: email,
        senha: hashedPassword,
        centroDeCustoId: centroDeCustoId
      });
      novoUser.senha = '';
      return novoUser ? novoUser : null;
    } catch (error) {
      throw error;
    }
  }

  async login(email, senha) {
    try {
      const user = await this.User.findOne({ where: { email: email } });
      if (user && await bcrypt.compare(senha, user.senha)) {
        const token = jwt.sign({ id: user.id }, '123', { expiresIn: '1h' });
        user.senha = '';
        return { user, token };
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }

  async localizarUsuarioPeloId(id) {
    try {
      const idUser = await this.User.findOne({ where: { id: id } });
      idUser.senha = '';
      return idUser;
    } catch (error) {
      throw error;
    }
  }

  async listarTodos(token) {
    try {
      const decoded = jwt.verify(token, '123');
      if (decoded) {
        const users = await this.User.findAll();
        users.forEach(user => user.senha = '');
        return users;
      } else {
        throw new Error('Token inválido');
      }
    } catch (error) {
      throw error;
    }
  }

  async atualizar(id, nome, email, centroDeCustoId) {
    try {
      const user = await this.User.findOne({ where: { id } });
      if (user) {
        user.nome = nome;
        user.email = email;
        user.centroDeCustoId = centroDeCustoId;
        user.senha = '';
        await user.save();
        return user;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  async deletar(id) { 
    try {
      const user = await this.User.findOne({ where: { id } });
      if (user) {
        await user.destroy();
        return true;
      }
      return false;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = userService;
