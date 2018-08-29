Feature: Validando as Páginas

   Eu como cliente devo navegar pelas páginas sem ocorrer nenhum problema.

   Scenario: Entrar na pagina rotas
        Given que estou na pagina inicial
        When clicar no botão encontrar
        Then devo ir para a pagina de rotas

    Scenario: Entrar na pagina preco
        Given que estou em qualquer pagina
        When clicar no botão preco
        Then devo ir para pagina de preco

    Scenario: Entrar na pagina sobre
        Given que estou em qualquer pagina
        When clicar no botão sobre
        Then devo ir para a pagina sobre

    Scenario: Entrar na pagina funcionalidades
        Given que estou em qualquer pagina
        When clicar no botão funcionalidades
        Then devo ir para a pagina funcionalidades

    Scenario: Entrar na pagina desenvolvimento
        Given que estou em qualquer pagina
        When clicar no botão desenvolvimento
        Then devo ir para a pagina desenvolvimento

    Scenario: Entrar na pagina login
        Given que estou em qualquer pagina
        When clicar no botão login
        Then devo ir para a pagina login

    Scenario: Clique rota de partida
        Given que estou na pagina de rotas
        When clicar em qualquer rua
        Then devo ver a opcao de ponto de partida


