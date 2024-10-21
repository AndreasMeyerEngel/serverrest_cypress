import listarProdutoPage from "../pages/listarProdutoPage";
import loginPage from "../pages/loginPage";
import { faker } from '@faker-js/faker';

describe('Listar Produtos', () => {
    let usuarioAdmin;
  
    beforeEach(() => {
      // Carrega o usuário administrador do arquivo fixture
      cy.fixture('usuarioAdmin.json').then((usuario) => {
        usuarioAdmin = usuario;
      });
      loginPage.visit();

    });
  
    it('Deve validar a listagem de produtos', () => {
        loginPage.preencherEmail(usuarioAdmin.email);
        loginPage.preencherSenha(usuarioAdmin.senha);
        loginPage.clicarLogin();
        loginPage.checarMensagemDeBoasVindas();
        listarProdutoPage.clicarListarProdutos();
        listarProdutoPage.validaTextoListadeProdutos();
        cy.wait(3000)
        listarProdutoPage.validarProdutos()
    });
});