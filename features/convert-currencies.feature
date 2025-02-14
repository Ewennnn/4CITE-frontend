Feature: Transfert d'argent entre deux comptes avec conversion de devise

    Scenario: Un utilisateur transfert de l'argent avec succès
        Given un compte A avec un solde de 1000€
        And un compte B avec un solde de 500¥
        When l'utilisateur du compte A transfère 1€ vers le compte B
        Then la transaction est acceptée
        And le solde du compte A est de 999€
        And le solde du compte B est de 660¥
        And une confirmation de transaction est envoyée à l'utilisateur A
        And l'utilisateur B reçoit une notification de virement

    Scenario: Un utilisateur transfer de l'argent avec un solde insuffisant
        Given un compte A avec un solde de 1€
        And un compte B avec un solde de 1600¥
        When l'utilisateur du compte A transfère 2€ vers le compte B
        Then La transaction est refusée
        And le solde du compte A est de 1€
        And le solde du compte B est de 1600¥
        And l'utilisateur A reçoit une erreur "solde insuffisant"