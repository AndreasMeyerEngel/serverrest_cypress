class loginPage {
    visit() {
      cy.visit('/login');
    }
  
    preencherEmail(email) {
      cy.get('[data-testid="email"]').type(email, { delay: 0 });
    }
  
    preencherSenha(senha) {
      cy.get('[data-testid="senha"]').type(senha, { delay: 0 });
    }
  
    clicarLogin() {
      cy.get('button').contains('Entrar').click();
    }
  
    checarMensagemDeBoasVindas() {
      cy.get('h1').invoke('text').should('match', /Bem Vindo .+/);
    }
  
    checarAlertaDeErro() {
      cy.get('.alert').should('contain.text', 'Email e/ou senha inválidos');
    }
  }
  
  export default new loginPage();
  