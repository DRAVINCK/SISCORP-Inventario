// services/notifications.js

class fornecedorService {
    constructor(fornecedorModel) {
      this.fornecedor = fornecedorModel;
    }
  
    async criar(nome, cnpj){
      try {
        const novoFornecedor = await this.fornecedor.create(
          { 
              nome,
              cnpj 
          });
        return fornecedor ? novoFornecedor : null;
      } catch (error) {
        throw error;
      }
    }
  
    async listarTodos(){
      try {
        const fornecedores = await this.fornecedor.findAll();
        return fornecedores ? fornecedores : null;
      } catch (error) {
        throw error;
      }
    }
  
    async buscarPorId(id){
      try {
        const fornecedor = await this.fornecedor.findOne(id);
        return fornecedor ? fornecedor : null;
      } catch (error) {
        throw error;
      }
    }
  
    async atualizar(id, nome, cnpj){
      try {
        const fornecedor = await this.fornecedor.findOne(id);
        if(fornecedor){
          fornecedor.nome = nome;
          fornecedor.cnpj = cnpj;
          await fornecedor.save();
          return fornecedor;
        }
        return null;
      } catch (error) {
        throw error;
      }
    }
  }
  module.exports = fornecedorService;