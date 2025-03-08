// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    // before(() => {
    //     cy.clearCookies()
    //     cy.clearAllLocalStorage()
    // })

    // Hapus data username dan password jika terdapat value
    cy.get('#user_login').clear()
    cy.get('input[name="user_password"]').clear()

    // Input password dan username
    cy.get('#user_login').type(username)            
    cy.get('input[name="user_password"]').type(password)
      
    // Klik login
    cy.get('input[name="submit"]').click()
    cy.wait(2000)
})

Cypress.Commands.add('pay_bills', (amount, date, description) => {
    cy.clearCookies()
    cy.clearAllLocalStorage()

    // Hapus data username dan password jika terdapat value
    // cy.get('#sp_amount').clear()
    // cy.get('#sp_date').clear()
    // cy.get('#sp_description').clear()

    // Input amount, date, description
    cy.get('#sp_amount').type(amount)
    cy.get('#sp_date').type(date)

    // Klik date today
    cy.get('.ui-datepicker-days-cell-over > .ui-state-default').click()
    cy.wait(2000)

    // Input description
    cy.get('#sp_description').type(description)

    // Klik pay
    cy.get('#pay_saved_payees').click()
})