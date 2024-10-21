class cadastroUsuarioPage {
  visitar() {
    cy.visit('/cadastrarusuarios');
  }

  preencherFormulario(nome, email, senha) {
    cy.get('[data-testid="nome"]').type(nome, { delay: 0 });
    cy.get('[data-testid="email"]').type(email, { delay: 0 });
    cy.get('[data-testid="password"]').type(senha, { delay: 0 });
  }

  clicarCadastrar() {
    cy.get('[data-testid="cadastrar"]').contains('Cadastrar').click();
  }Q

  mensagemDeSucesso() {
    cy.get('.alert-link').should('contain.text', 'Cadastro realizado com sucesso');
  }

  checarNomeDaLoja() {
    cy.wait(2000);
    cy.get('h1').should('have.text', 'Serverest Store');
  }

  marcarCheckbox() {
    cy.get('[data-testid="checkbox"]').check();
  }
}

export default new cadastroUsuarioPage();
