import { faker } from '@faker-js/faker';
import cadastroProdutoPage from '../pages/cadastroProdutoPage';
import loginPage from '../pages/loginPage';

describe('Cadastro de Produtos', () => {
  // Gerando dados dinâmicos para cada execução
  const nomeProduto = faker.commerce.productName();
  const descricaoProduto = faker.commerce.productDescription();
  const precoProduto = faker.commerce.price({ min: 100, max: 200, dec: 0 });
  const quantidadeProduto = faker.finance.amount({ min: 5, max: 10, dec: 0 });

  beforeEach(() => {
    // Carrega o usuário administrador salvo no fixture
    cy.fixture('usuarioAdmin.json').then((usuarioAdmin) => {
      // Realiza o login usando os dados do administrador
      loginPage.visit();
      loginPage.preencherEmail(usuarioAdmin.email);
      loginPage.preencherSenha(usuarioAdmin.senha);
      loginPage.clicarLogin();
      loginPage.checarMensagemDeBoasVindas();
    });

    // Visita a página de cadastro de produto após o login
    cadastroProdutoPage.visitarPaginaDeCadastro();
  });

  it('Deve cadastrar um novo produto e verificar na listagem', () => {
    // Preenchendo o formulário com os dados dinâmicos do produto
    cadastroProdutoPage.preencherNomeDoProduto(nomeProduto);
    cadastroProdutoPage.preencherPreco(precoProduto);
    cadastroProdutoPage.preencherDescricao(descricaoProduto);
    cadastroProdutoPage.preencherQuantidade(quantidadeProduto);
    cadastroProdutoPage.clicarCadastrar();

    // Verifica se o produto aparece na listagem
    cadastroProdutoPage.verificarProdutoNaListagem(nomeProduto);
  });
});
