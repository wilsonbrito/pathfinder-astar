Feature: Encontrar rota

   Eu como cliente devo inserir meus dados e encontrar a rota mais eficiente.

   Scenario: Encontrar rota
        Given que estou na pagina de rotas
        When clicar na "rua 1" como ponto de partida
        And clicar na "rua 2" como ponte de destino
        Then devo ir pela rota que contém a "rua x" e "rua y"

   Scenario: Encontrar rota com buraco
        Given que estou na pagina de rotas
        When clicar na "rua 1" como ponto de partida
        And clicar na "rua 2" como ponte de destino
        And na rua "rua 3" contém buraco
        Then devo ir pela rota que contém a "rua x" e "rua y"

    Scenario: Encontrar rota com buraco
        Given que estou na pagina de rotas
        When clicar na "rua 1" como ponto de partida
        And clicar na "rua 2" como ponte de destino
        And na rua "rua 3" contém semaforo
        Then devo ir pela rota que contém a "rua x" e "rua y"