describe('template spec', () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/"); // Visite de l'URL avant chaque test
    });

    it('Devrait vérifier le nombre total de Pokémon', () => {
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon').then((response) => {
            expect(response.body.count).to.be.greaterThan(0); // Vérifie qu'il y a au moins un Pokémon
        });
    });

    it('la div pokeListe doit exister', () => {
        cy.get('#pokeListe').should('exist');
    });

    it('doit verifier que le status de la réponse de l API est 200', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon') // Remplacez par l'URL de votre API
            .its('status')
            .should('equal', 200);
    });

    it('Devrait mesurer le temps de réponse de l API (inf à 2000ms)', () => {
        const url = 'https://pokeapi.co/api/v2/pokemon';
        const startTime = performance.now(); // Démarre le chrono / Départ du test

        cy.request('GET', url).then((response) => {
            const endTime = performance.now(); // Arrête le chronom
            const duration = endTime - startTime; // Calcule la durée

            expect(response.status).to.eq(200); // Vérifie que le statut est 200
            expect(duration).to.be.lessThan(2000); // Vérifie que le temps de réponse est inférieur à 2000 ms
        });
    });

    it("Devrait vérifier BULBASAUR en premier", () => {
        cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon').as('getPokemon');
        cy.get('#pokeListe p').eq(0).should('have.text', 'bulbasaur');
    });

    it('Devrait vérifier que la réponse contient les champs attendus name et url', () => {
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon').then((response) => {
            expect(response.body).to.have.property('results'); // Vérifie que 'results' est présent
            expect(response.body.results[0]).to.have.all.keys('name', 'url'); // Vérifie les clés de chaque Pokémon
        });
    });
})