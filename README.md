# Desafio Cypress

Este projeto utiliza **Cypress** para automação de testes e inclui cenários de testes de API e UI. Abaixo estão as instruções para configuração, execução dos testes, e boas práticas no uso do repositório.

---

## **Índice**
1. [Configuração Inicial](#configuração-inicial)
2. [Execução dos Testes](#execução-dos-testes)
   - [Modo Interativo](#executar-o-cypress-em-modo-interativo)
   - [Modo Headless](#executar-os-testes-no-terminal)
   - [Testes em Diferentes Navegadores](#executar-em-diferentes-navegadores)
   - [Executar Teste Específico](#executar-um-teste-específico)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Cenários de Teste](#cenarios-de-teste)


---

## **1 - Configuração Inicial**

**Clone o repositório:**

``` git clone git@github.com:AndreasMeyerEngel/serverrest_cypress.git ```

**Acesse o diretório do projeto**

 ``` cd repositorio_do_projeto ```

**Instale as dependências do projeto: Certifique-se de ter Node.js instalado.   Para instalar as dependências, rode:**

``` npm install ```

## **2 - Execução dos Testes**
 **Executar o Cypress em modo interativo:**

``` npx cypress open ```

 **Executar o Cypress pelo terminal:**

   ``` npx cypress run ```

 **Executar o Cypress em diferentes navegadores:**

   **Chrome:**

   ``` npx cypress run --browser chrome ```

   **Firefox:**
   
   ``` npx cypress run --browser firefox ```

   
 **Executar um teste especifico:**

   ``` npx cypress run --spec cypress/e2e/06_api.cy.js ```

## **3 - Estrutura do Projeto**

   Os testes de front-end são realizado no link: https://front.serverest.dev/login
   Os testes de API são realizados no link: https://serverest.dev/

   - **cypress/e2e:** Contém os cenários de teste.
   - **cypress/pages:** Páginas para encapsulamento de ações (Page Objects).
   - **cypress/fixtures:** Dados dinâmicos para reutilização em testes.
   - **cypress/support:** Arquivo para comandos personalizados e configurações globais.



   **Comandos Personalizados**
   
   Os comandos personalizados são definidos em cypress/support/commands.js. Eles simplificam as requisições API e ações repetitivas.

   ```
      Cypress.Commands.add('login', (email, password) => {
      cy.request({
         method: 'POST',
         url: 'https://serverest.dev/login',
         body: { email, password }
      }).then((response) => {
         Cypress.env('token', response.body.authorization);
      });
      });
   ```

## 4 - Cenários de Teste
 
 Os cenários de testes, estão definidos na pasta Etapa 1, porém deixarei presente aqui na documentação também.

### 1. Login de Usuário Admin (Front-end)
**Motivo:** O login é essencial para acessar qualquer funcionalidade do sistema. Sem ele, o usuário não conseguirá realizar nenhuma operação.  
**Criticidade:** Alta - login é essencial para acessar qualquer outra parte do sistema.  
**Condição de Teste:** O usuário precisa estar previamente registrado e ser um administrador.  
**Pré-condição:** O site deve estar acessível e o usuário tem credenciais válidas.  
**Passo a Passo:**
  1. Acessar [Página de Login](https://front.serverest.dev/login).
  2. Inserir e-mail e senha válidos.
  3. Clicar no botão Login.
**Resultado Esperado:** O usuário é redirecionado para a página inicial e vê uma mensagem de boas-vindas.

### 2. Login com Credenciais Inválidas (Front-end)
**Motivo:** Testar como o sistema lida com tentativas de login incorretas.  
**Criticidade:** Alta - garantir que o sistema bloqueie credenciais incorretas é essencial para prevenir acessos não autorizados.  
**Condição de Teste:** Não é necessário cadastro prévio.  
**Pré-condição:** O site deve estar acessível.  
**Passo a Passo:**
  1. Acessar a página de login.
  2. Inserir um e-mail e senha inválidos.
  3. Clicar no botão Login.
**Resultado Esperado:** O sistema exibe uma mensagem de erro: "Email e/ou senha inválidos".

### 3. Cadastro de Novo Usuário Administrador (Front-end)
**Motivo:** Permitir a criação de um usuário administrador.  
**Criticidade:** Média-Alta - cadastro é essencial para que novos usuários acessem o sistema.  
**Condição de Teste:** O sistema deve permitir o cadastro de um novo usuário administrador válido.  
**Pré-condição:**  
  - O site deve estar acessível.  
  - O e-mail utilizado no teste não pode estar cadastrado previamente (pode-se usar um e-mail dinâmico).  
  - O campo "Cadastrar como Administrador?" deve estar marcado.  
**Passo a Passo:**
  1. Na tela de login, clicar em Cadastre-se.
  2. Preencher os campos: nome, e-mail, senha e tipo de usuário.
  3. Marcar o checkbox "Cadastrar como Administrador?"
  4. Clicar no botão "Cadastrar".
**Resultado Esperado:** Exibição de mensagem de sucesso: "Usuário criado com sucesso".

### 4. Cadastro de Novo Usuário (Front-end)
**Motivo:** Permitir a criação de novos usuários para acesso ao sistema.  
**Criticidade:** Média-Alta - cadastro é essencial para que novos usuários acessem o sistema.  
**Condição de Teste:** O sistema deve permitir o cadastro de um novo usuário válido.  
**Pré-condição:**  
  - O site deve estar acessível.  
  - O e-mail utilizado no teste não pode estar cadastrado previamente (usar e-mail dinâmico).  
**Passo a Passo:**
  1. Navegar até "Cadastrar Usuários".
  2. Preencher os campos: nome, e-mail, senha e tipo de usuário.
  3. Clicar no botão "Cadastrar".
**Resultado Esperado:** Exibição de mensagem de sucesso: "Usuário criado com sucesso".

### 5. Listagem de Produtos (Front-end)
**Motivo:** Fornecer uma visão dos produtos cadastrados no sistema.  
**Criticidade:** Alta - fundamental para o gerenciamento do estoque.  
**Condição de Teste:** O sistema deve ter ao menos um produto cadastrado.  
**Pré-condição:**  
  - O site deve estar acessível.  
  - Se necessário, cadastrar um produto previamente via automação.  
**Passo a Passo:**
  1. Navegar até "Listar Produtos".
  2. Verificar se a lista de produtos é carregada corretamente.
**Resultado Esperado:** A lista exibe corretamente os produtos cadastrados.

### 6. Cadastro de Produto Novo (Front-end)
**Motivo:** Garantir a inserção de novos produtos no sistema.  
**Criticidade:** Alta - sem a possibilidade de cadastrar um novo produto, o sistema não permite oferecer novos itens aos clientes.  
**Condição de Teste:** O sistema deve permitir a criação de produtos com dados válidos.  
**Pré-condição:**  
  - O site deve estar acessível.  
  - O nome do produto não pode estar duplicado (usar nomes dinâmicos).  
**Passo a Passo:**
  1. Navegar até "Cadastrar Produtos".
  2. Preencher o nome, preço, descrição e quantidade do produto.
  3. Clicar em "Cadastrar".
**Resultado Esperado:** Exibição de mensagem: "Cadastro realizado com sucesso".

### 7. Logout do Sistema (Front-end)
**Motivo:** Garantir que o usuário consegue se deslogar do sistema.  
**Criticidade:** Baixa.  
**Condição de Teste:** O sistema deve permitir que o usuário faça logout.  
**Pré-condição:** O usuário deve estar logado.  
**Passo a Passo:**
  1. Realizar o login.
  2. Clicar em Logout.
**Resultado Esperado:** Ao clicar em logout, deve retornar para a tela de login.

### Cenários de Teste de API

#### 8.1 Login de Usuário Admin via API
**Motivo:** Validar o funcionamento do login via API.  
**Criticidade:** Alta.  
**Pré-condição:** O usuário precisa estar registrado como administrador.  
**Passo a Passo:**
  1. Enviar uma requisição POST para `/login` com e-mail e senha válidos.
**Resultado Esperado:** Retorno de 200 OK e um token de autorização no corpo da resposta.

#### 8.2 Login com Credenciais Inválidas via API
**Motivo:** Verificar a resposta da API para tentativas de login inválidas.  
**Criticidade:** Alta.  
**Passo a Passo:**
  1. Enviar uma requisição POST para `/login` com e-mail e senha inválidos.
**Resultado Esperado:** Retorno de 401 Unauthorized e mensagem "Email e/ou senha inválidos".

#### 8.3 Cadastro de Novo Produto via API
**Motivo:** Validar a criação de produtos por meio da API.  
**Criticidade:** Alta.  
**Pré-condição:** Nome do produto não pode estar duplicado.  
**Passo a Passo:**
  1. Enviar uma requisição POST para `/produtos` com nome, preço, descrição e quantidade.
**Resultado Esperado:** Retorno de 201 Created e mensagem "Cadastro realizado com sucesso".

#### 8.4 Listagem de Produtos via API
**Motivo:** Verificar se a API retorna corretamente a lista de produtos cadastrados.  
**Criticidade:** Alta.  
**Pré-condição:** Deve haver ao menos um produto cadastrado.  
**Passo a Passo:**
  1. Enviar uma requisição GET para `/produtos`.
**Resultado Esperado:** Retorno de 200 OK com a lista de produtos cadastrados.
