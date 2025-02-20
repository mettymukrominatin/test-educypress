/// <reference types= "cypress" />

describe('Navbar Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
    })
    it('Should display online banking content', () => {
        cy.get('#onlineBankingMenu > div > strong').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')

        // Additional Assert
        cy.get('h1').should('have.text', 'Online Banking')
    });
    it('Should display feedback content', () => {
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')

        // Additional Assert
        cy.get('.offset3').should('be.visible')
        cy.get('form').find('input').should('not.have.class', 'disabled')
    });
    it('Should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')

        // Additional Assert
        cy.get('.top_offset > :nth-child(2)').should('be.visible')
    });
})