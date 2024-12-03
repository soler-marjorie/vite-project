describe('template spec', () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/"); // Visite de l'URL avant chaque test
    });

    it('Additionner 2 nombres positifs', () => {
      cy.get('input');

      cy.get('#firstNumber').type('2');
      cy.get('#secondNumber').type('3');
      cy.get('button').click();
      cy.get('#result').should('have.text', '5');
    });

    it('Additionner 2 nombres négatifs', () => {
      cy.get('#firstNumber').type('-2');
      cy.get('#secondNumber').type('-3');
      cy.get('button').click();
      cy.get('#result').should('have.text', '-5');
    });

    //
    it('l\'app additionne deux nombres négatifs', () => {
      cy.get('#firstNumber').type('2.15');
      cy.get('#secondNumber').type('7.75');
      cy.get('button').click();
      cy.get('#result').should('have.text', '9.9');
    });

    it("L'app doit afiicher ' ' (rien) initialement", () => {
      cy.get('#result').should('have.text', 'Résultat : ');
    });

    it('Devrait gérer addition avec  un zero', () => {
        cy.get('#firstNumber').type(0);
        cy.get('#secondNumber').type(5);
        cy.get('#calculBtn').click();
        cy.get('#result').should('have.text', '5');
    });

    it('Devrait gérer addition avec 2 nombre à zeros', () => {
        cy.get('#firstNumber').type(0);
        cy.get('#secondNumber').type(0);
        cy.get('#calculBtn').click();
        cy.get('#result').should('have.text', '0');
    });

    it('devrait gérer des grand nombre  positifs', () => {
        cy.get('#firstNumber').type(1000000000);
        cy.get('#secondNumber').type(500000000);
        cy.get('#calculBtn').click();
        cy.get('#result').should('have.text', '1500000000');
    });

    it('devrait gérer des grand nombre  negatifs', () => {
        cy.get('#firstNumber').type(-1000000000);
        cy.get('#secondNumber').type(-500000000);
        cy.get('#calculBtn').click();
        cy.get('#result').should('have.text', '-1500000000');
    });

    it('devrait gérer input type text ?', () => {
        cy.get('#firstNumber').type('abc');
        cy.get('#secondNumber').type(2);
        cy.get('#calculBtn').click();
        // Vérifie que le résultat n'est pas un nombre
        cy.get('#result').should('not.have.text', 'NaN');
    });

    it('devrait gérer des champs vide', () => {
        cy.get('#calculBtn').click();
        cy.get('#result').should('not.have.text', 'NaN');
    });
})