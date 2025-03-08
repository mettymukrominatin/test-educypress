/// <reference types="cypress" />

describe('Working with inputs', () => {
    before(() => {
        cy.clearCookies()
        cy.clearAllLocalStorage()
    })
    it('Visit the website', () => {
        
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
    })

    it('Should try to login', () => {
        cy.fixture('user').then(user => {
            // Cari user user_zero
            const user_zero = user.find(user => user.username === "username");
            const username = user_zero.username
            const password = user_zero.password

            // Ketika menggunakan fitur commands
            cy.login(username, password)
        })
    })
    
    it('Pay Bills Page', () => {
        // Validasi
        cy.get('.brand').should('contain','Zero Bank')

        // Ke halaman pay bills
        cy.get('#pay_bills_tab > a').click()

        // Cari fixture pay bills
        cy.fixture('pay_bills.json').then(pay_bills => {
            const amount = pay_bills.amount
            const date = pay_bills.date
            const description = pay_bills.description

            // Ketika menggunakan fitur commands
            cy.pay_bills(amount, date, description)
        })
    });
});