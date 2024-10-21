// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Login com usuário válido
Cypress.Commands.add('loginAdmin', (email, senha) => {
  cy.request({
    method: 'POST',
    url: 'https://serverest.dev/login',
    body: {
      email,
      password: senha
    }
  }).then((response) => {
    expect(response.status).to.eq(200);
    Cypress.env('token', response.body.authorization); // Armazena o token no Cypress.env
    cy.log(`Login realizado com sucesso! Token: ${response.body.authorization}`);
  });
});

// Login com credenciais inválidas
Cypress.Commands.add('loginInvalido', (email, senha) => {
  cy.request({
    method: 'POST',
    url: 'https://serverest.dev/login',
    failOnStatusCode: false,
    body: {
      email,
      password: senha
    }
  }).then((response) => {
    expect(response.status).to.eq(401);
    cy.log(`Tentativa de login falhou com mensagem: ${response.body.message}`);
  });
});

// Cadastro de novo produto
Cypress.Commands.add('cadastrarProduto', (nome, preco, descricao, quantidade) => {
  const token = Cypress.env('token');

  cy.request({
    method: 'POST',
    url: 'https://serverest.dev/produtos',
    headers: {
      Authorization: token
    },
    body: {
      nome,
      preco,
      descricao,
      quantidade
    }
  }).then((response) => {
    expect(response.status).to.eq(201);
    const produtoId = response.body._id;
    Cypress.env('produtoId', produtoId); // Armazena o ID do produto
    cy.log(`Produto cadastrado com sucesso! ID: ${produtoId}`);
  });
});

// Listar produtos e validar o cadastro
Cypress.Commands.add('listarProdutos', () => {
  const token = Cypress.env('token');

  cy.request({
    method: 'GET',
    url: 'https://serverest.dev/produtos',
    headers: {
      Authorization: token
    }
  }).then((response) => {
    expect(response.status).to.eq(200);
    cy.log(`Produtos listados com sucesso! Total: ${response.body.produtos.length}`);
  });
});

  