class listarProdutos {
    clicarListarProdutos() {
        cy.get('[data-testid="listarProdutos"]').click()
    }

    validaTextoListadeProdutos() {
        cy.get('h1').should('have.text', 'Lista dos Produtos')
    }

    validarProdutos() {
        cy.get('.row').should('be.visible')
    }
    
}

export default new listarProdutos();