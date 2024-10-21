class cadastroProdutoPage {
    visitarPaginaDeCadastro() {
      cy.get('[data-testid="cadastrarProdutos"]').click();
    }
  
    preencherNomeDoProduto(nome) {
      cy.get('[data-testid="nome"]').type(nome, { delay: 0 });
    }
  
    preencherPreco(preco) {
      cy.get('[data-testid="preco"]').type(preco, { delay: 0 });
    }
  
    preencherDescricao(descricao) {
      cy.get('[data-testid="descricao"]').type(descricao, { delay: 0 });
    }
  
    preencherQuantidade(quantidade) {
      cy.get('[data-testid="quantity"]').type(quantidade, { delay: 0 });
    }
  
    clicarCadastrar() {
        cy.get('[data-testid="cadastarProdutos"]').click()
    }
  
    verificarProdutoNaListagem(nomeProduto) {
      cy.contains(nomeProduto).scrollIntoView().should('be.visible');
    }
}

export default new cadastroProdutoPage();