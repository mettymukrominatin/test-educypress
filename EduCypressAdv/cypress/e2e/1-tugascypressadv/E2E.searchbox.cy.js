/// <reference types= "cypress" />

describe('Searchbox Test', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('online {enter}')
    });
    it('Should show search result page', () => {
        cy.get('h2').should('contain', 'Search Results:')
    });
    it('Should show search result value', () => {
        cy.get(':nth-child(4) > :nth-child(1) > a').should('contain', 'Zero - Free Access to Online Banking')
        cy.get(':nth-child(4) > :nth-child(2)').should('contain', 'Zero - Online Statements')
    });

    it('Should click one of the search result value', () => {
        cy.get(':nth-child(4) > :nth-child(1) > a').click()
        cy.url().should('include', 'online-banking.html')
    });
})