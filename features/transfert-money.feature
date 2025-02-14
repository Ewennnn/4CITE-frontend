Feature: Transfert d'argent entre comptes bancaires
    
    Scenario: Un utilisateur transfère de l'argent avec succès
        Given un compte A avec un solde de 1000€
        And un compte B avec un solde de 500€
        When L'utilisateur A transfère 200€ vers l'utilisateur B
        Then Le solde du compte A est de 800€
        And le solde du compte B est de 700€
        And une confirmation de transaction est envoyée à l'utilisateur A
        And L'utilisateur B reçoit une notification de virement

    Scenario: Echec du transfert en raison d'un solde insuffisant
        Given un compte A avec un solde de 1000€
        And un compte B avec un solde de 500€
        When L'utilisateur A transfère 2000€ vers l'utilisateur B
        Then Le solde du compte A est de 1000€
        And le solde du compte B est de 500€
        And L'utilisateur A reçoit une erreur "Solde insuffisant"

    Scenario: Echec du transfert en raison d'un compte inexistant
        Given un compte A avec un solde de 1000€
        And un compte V inexistant
        When L'utilisateur A transfère 100€ vers le compte B
        Then Le solde du compte A est de 1000€
        And L'utilisateur A reçoit une erreur "Le compte B n'existe pas"