// ./controllers/userController.js

class userController {
    constructor(userService) {
        this.userService = userService;
    }
    async create(req, res) { //request responde
        const { nome, email, senha } = req.body;//sera alterado pq tem um erro de codigo
        try {
            const novoUser = await this.userService.cadastrar(nome, email, senha);
            res.status(200).json(novoUser);

        }
        catch (error) {
            res.status(500).json({ error: 'Erro ao inserir o novo usuário' });
        }
    }

    async login(req, res) {
        const { email, senha } = req.body;
        try {
            const userLoc = await this.userService.login(email, senha);
            res.status(200).json(userLoc);
        }
        catch {
            res.status(400).json({ error: 'Login inválido' });
        }
    }
    async localizarUsuarioPeloId(req, res) {
        const { id } = req.body;
        try {
            const idUser = await this.userService.localizarUsuarioPeloId(id);
            res.status(200).json(idUser);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar id' });
        }
    }

    async listarTodos(req,res) {
        const token = req.headers.authorization;
        try {
            const users = await this.userService.listarTodos(token);
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({error: 'Erro ao listar usuários'});
        }
    }
}
module.exports = userController;
