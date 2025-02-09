/// <reference types="cypress" />

describe('Working with inputs', () => {
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
    })
   
    // Ketika menggunakan inspect nya id
    it('Should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    })

    // Ketika menggunakan inspectnya name
    it('Should fill password', () => {
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
    })

    it('Should try to login', () => {
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password

            // Ketika menggunakan fitur commands
            cy.login(username, password)

            // Ketika belum menggunakan fitur commands
            // cy.get('#user_login').clear()
            // cy.get('#user_login').type(username)            

            // cy.get('input[name="user_password"]').clear()
            // cy.get('input[name="user_password"]').type(password)
            
            // cy.get('input[name="submit"]').click()

            // Ketika menggunakan inspectnya class
            // cy.get('.alert-error').contain('Login and/or password are wrong.')
            cy.get('.alert-error').should('contain.text', 'Login and/or password are wrong.');

        })
    })
});