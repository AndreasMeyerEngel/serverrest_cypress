import loginPage from "../pages/loginPage";
import { faker } from '@faker-js/faker'; 

describe('Login', () => {
  let usuarioAdmin;

  beforeEach(() => {
    // Carrega o usuário administrador do arquivo fixture
    cy.fixture('usuarioAdmin.json').then((usuario) => {
      usuarioAdmin = usuario;
    });
    loginPage.visit();
  });

  it('Deve realizar o login do usuário administrador', () => {
    loginPage.preencherEmail(usuarioAdmin.email);
    loginPage.preencherSenha(usuarioAdmin.senha);
    loginPage.clicarLogin();
    loginPage.checarMensagemDeBoasVindas();
  });

  it('Tentativa de login, com usuário não cadastrado no sistema', () => {
    const emailInvalido = faker.internet.email();
    const senhaInvalida = faker.internet.password();

    loginPage.preencherEmail(emailInvalido);
    loginPage.preencherSenha(senhaInvalida);
    loginPage.clicarLogin();
    loginPage.checarAlertaDeErro();
  });
});



