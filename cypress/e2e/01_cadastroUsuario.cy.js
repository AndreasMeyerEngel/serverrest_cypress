import cadastroUsuarioPage from "../pages/cadastroUsuarioPage";
import loginPage from "../pages/loginPage";
import { faker } from '@faker-js/faker';

describe('Cadastro de Usuário', () => {
  beforeEach(() => {
    cadastroUsuarioPage.visitar();
  });

  it('Deve realizar o cadastro de um usuário administrador', () => {
    // Gerando dados dinâmicos para o usuário administrador
    const usuarioAdmin = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      senha: faker.internet.password(),
    };

    // Preenchendo o formulário com os dados gerados
    cadastroUsuarioPage.preencherFormulario(usuarioAdmin.nome, usuarioAdmin.email, usuarioAdmin.senha);
    cadastroUsuarioPage.marcarCheckbox();
    cadastroUsuarioPage.clicarCadastrar();
    cadastroUsuarioPage.mensagemDeSucesso();
    loginPage.checarMensagemDeBoasVindas();

    // Armazena o usuário em um arquivo para ser usado em outros testes
    cy.writeFile('cypress/fixtures/usuarioAdmin.json', usuarioAdmin);
  });

  it('Deve realizar um novo cadastro de usuário', () => {
    const nome = faker.person.fullName();
    const email = faker.internet.email();
    const senha = faker.internet.password();

    cadastroUsuarioPage.preencherFormulario(nome, email, senha);
    cadastroUsuarioPage.clicarCadastrar();
    cadastroUsuarioPage.mensagemDeSucesso();
    cadastroUsuarioPage.checarNomeDaLoja();
  });
});
