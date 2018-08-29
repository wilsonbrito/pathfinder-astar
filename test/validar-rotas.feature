Feature: Validando botões das Rotas

    Eu como cliente estou na pagina de rotas e devo utilizar todas as funcionalidades e não deverá apresentar erro.

    Scenario: Opção de Ponto de Partida
        Given que estou na pagina de rotas
        And está aberto o modal de opções
        When clicar na opção ponto de partida
        Then devo ver que a rua esta com a cor vermelha

    Scenario: Opção de Ponto de Chegada
        Given que estou na pagina de rotas
        And está aberto o modal de opções
        When clicar na opção ponto de chegada
        Then devo ver que a rua esta com a cor vermelha

    Scenario: Opção de adicionar buraco
        Given que estou na pagina de rotas
        And está aberto o modal de opções
        When clicar na opção adicionar buraco
        Then devo ver que a rua esta com a cor alterada

    Scenario: Opção de adicionar semaforo
        Given que estou na pagina de rotas
        And está aberto o modal de opções
        When clicar na opção adicionar semaforo
        Then devo ver que a rua esta com a cor alterada

