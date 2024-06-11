// services/clienteService.js

class ClienteService {
    constructor(clienteModel) {
        this.Cliente = clienteModel;
    }

    async criar(cpf, nome) {
        try {
            const novoCliente = await this.Cliente.create({
                cpf,
                nome
            });
            return novoCliente;
        } catch (error) {
            throw error;
        }
    }

    async listarTodos() {
        try {
            const clientes = await this.Cliente.findAll();
            return clientes;
        } catch (error) {
            throw error;
        }
    }

    async buscarPorId(id) {
        try {
            const cliente = await this.Cliente.findByPk(id);
            return cliente ? cliente : null;
        } catch (error) {
            throw error;
        }
    }

    async atualizar(id, cpf, nome) {
        try {
            const cliente = await this.Cliente.findByPk(id);
            if (cliente) {
                cliente.cpf = cpf;
                cliente.nome = nome;
                await cliente.save();
                return cliente;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }

    async deletar(id) {
        try {
            const cliente = await this.Cliente.findByPk(id);
            if (cliente) {
                await cliente.destroy();
                return true;
            }
            return false;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ClienteService;
