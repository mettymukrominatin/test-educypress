/// <reference types= "cypress" />

describe('Login/Logout Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('.icon-signin').click()
    })

    // Negative test
    it('Should try to login with invalid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('input[name="submit"]').click()
    });

    it('Should display error message', () => {
        cy.get('.alert').should('be.visible').and('contain.text','Login and/or password are wrong.')
    });

    // Positive test
    it('Should login to application with valid data', () => {
        cy.fixture("user.json").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)
            cy.get('#user_password').clear()
            cy.get('#user_password').type(password)
            cy.get('input[name="submit"]').click()

            cy.get('h2').should('contain.text', 'Cash Accounts')
        })
    });

    it('Should logout from the application', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()

        // Validasi
        cy.get('strong').should('contain.text', 'Home')
    });
})