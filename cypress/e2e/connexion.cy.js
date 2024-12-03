describe('test sign in form', () => {
    it('passes', () => {
      cy.visit('http://localhost:5173/'),
      cy.get('h1').contains('Voici un formulaire de connexion');
      cy.get('.email').type('cypress@mail.com');
      cy.get('.password').type('mangermangermanger');
      cy.get('button').click();
    })
  })