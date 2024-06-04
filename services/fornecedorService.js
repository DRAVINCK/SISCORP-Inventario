// services/notifications.js
class FornecedorService {
  constructor(fornecedorModel) {
    this.Fornecedor = fornecedorModel;
  }

  async criar(nomecode, cnpjcod) {
    try {
      const fornecedorExistente = await this.Fornecedor.findOne(
        {
          where: 
          {
            cnpj: cnpjcod
          }
        });

      if (fornecedorExistente) {
        throw new Error('CNPJ já cadastrado');
      };

      const novoFornecedor = await this.Fornecedor.create(
        {
          nome: nomecode,
          cnpj: cnpjcod
        });
      return novoFornecedor ? novoFornecedor : null;
    } catch (error) {
      throw error;
    }

  }

  async listarTodos() {
    try {
      const fornecedores = await this.Fornecedor.findAll();
      return fornecedores ? fornecedores : null;
    } catch (error) {
      throw error;
    }
  }

  async buscarPorId(id) {
    try {
      const fornecedor = await this.Fornecedor.findOne({ where: { id: id } });
      return fornecedor ? fornecedor : null;
    } catch (error) {
      throw error;
    }
  }

  async atualizar(id, nome, cnpj) {
    try {
      const fornecedor = await this.Fornecedor.findOne({ where: { id } });
      if (fornecedor) {
        fornecedor.nome = nome;
        fornecedor.cnpj = cnpj;
        await fornecedor.save();
        return { success: true, message: 'Fornecedor atualizado com sucesso', fornecedor };
      }
      return { success: false, message: 'Fornecedor não encontrado' };
    } catch (error) {
      throw error(message);
    }
  }
}
module.exports = FornecedorService;