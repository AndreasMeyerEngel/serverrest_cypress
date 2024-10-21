import loginPage from "../pages/loginPage";
import { faker } from '@faker-js/faker';

describe('API Tests', () => {
  let usuarioAdmin;

  beforeEach(() => {
    cy.fixture('usuarioAdmin.json').then((usuario) => {
      usuarioAdmin = usuario;
    });
    loginPage.visit();
  });

  before(() => {
    cy.fixture('usuarioAdmin.json').then((usuario) => {
      cy.loginAdmin(usuario.email, usuario.senha); // Utilizando custom command
    });
  });

  it('Deve realizar o login do usuário administrador', () => {
    cy.loginAdmin(usuarioAdmin.email, usuarioAdmin.senha); // Custom command
  });

  it('Tentativa de login com usuário não cadastrado no sistema', () => {
    const emailInvalido = faker.internet.email();
    const senhaInvalida = faker.internet.password();

    cy.loginInvalido(emailInvalido, senhaInvalida); // Custom command
  });

  it('Deve cadastrar um novo produto via API', () => {
    const nomeProduto = faker.commerce.productName();
    const descricaoProduto = faker.commerce.productDescription();
    const precoProduto = faker.commerce.price({ min: 100, max: 200, dec: 0 });
    const quantidadeProduto = faker.finance.amount({ min: 5, max: 10, dec: 0 });

    cy.cadastrarProduto(nomeProduto, precoProduto, descricaoProduto, quantidadeProduto); // Custom command
  });

  it('Deve listar e validar o produto criado', () => {
    cy.listarProdutos(); // Custom command
  });
});
