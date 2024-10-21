class logoutPage {
    clicarLogout() {
        cy.get('[data-testid="logout"]').click()
    }

    validaTelaLogin() {
        cy.get('.font-robot').should('have.text', 'Login')
    }
}

export default new logoutPage();