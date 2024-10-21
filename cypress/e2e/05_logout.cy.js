import loginPage from "../pages/loginPage";
import { faker } from '@faker-js/faker';
import logoutPage from "../pages/logoutPage";

describe('Logout', () => {
  let usuarioAdmin;

  beforeEach(() => {
    // Carrega o usuário administrador do arquivo fixture
    cy.fixture('usuarioAdmin.json').then((usuario) => {
      usuarioAdmin = usuario;
    });
    loginPage.visit();
  });

  it('Deve realizar o logout', () => {
    loginPage.preencherEmail(usuarioAdmin.email);
    loginPage.preencherSenha(usuarioAdmin.senha);
    loginPage.clicarLogin();
    loginPage.checarMensagemDeBoasVindas();
    logoutPage.clicarLogout()
    logoutPage.validaTelaLogin()
  });

});



