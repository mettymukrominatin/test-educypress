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

    it('Should active checkbox', () => {
        cy.get('input[name="user_remember_me"]').type('checkbox')
    })
});

// Pastikan untuk memvalidasi elemen terserah bertujuan untuk sudah masuk kah ke halaman itu