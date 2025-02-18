/// <reference types="cypress" />

describe ('My Second Test', () => {
    it('Clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io')
        
        // cy.pause()

        // Menunggu browser untuk ke load semua
        // Bisa digunakan untuk setiap perintah
        // Maksimal digunakan sampai 8000, rekomendasi digunakan maksimal 4000 aja
        cy.wait(2000)

        cy.contains('type').click()

        // Should be on a new URL which includes 'commands/actions'
        cy.url().should('include', '/commands/actions')

        // Get an input, type into it and verify that the value has been updated
        cy.get('.action-email')
        .type('mettytest@gmail.com')
        .should('have.value', 'mettytest@gmail.com')
    });
});