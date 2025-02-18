/// <reference types="cypress" />

describe('Authentication Page', () => {
    it('Visit the website', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', 'saucedemo.com')
    });

    it('Should check for correct element on the page', () => {
        // Validasi
        cy.get('.login_logo').should('have.text','Swag Labs')
        cy.wait(2000)
    });

    it('Clear the username and password', () => {
        // Hapus data username dan password jika terdapat value 
        cy.get('[data-test="username"]').clear()
        cy.get('[data-test="password"]').clear()
    });

    it('Should try to login', () => {
        cy.fixture('user.json').then(user => {
            // Cari user standard_user
            const user_standard = user.find(user => user.username === "standard_user");

            const username = user_standard.username;
            const password = user_standard.password;

            // Masuk dengan data user_standard
            cy.get('[data-test="username"]').type(username)
            cy.get('[data-test="password"]').type(password)
            
            // Klik login
            cy.get('[data-test="login-button"]').click()
        })
    });
})

describe('Inventory Page', () => {
    it('Should check for correct element on the first product', () => {
        // Validasi
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').should('contain','Sauce Labs Backpack')
        cy.wait(2000)
    });

    it('Click detail on the first product', () => {
        // Klik produk pertama
        cy.contains('Sauce Labs Backpack').click()
        cy.url().should('include','inventory-item.html?id=4')

        // Validasi
        cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Backpack')
    });
});

describe('Shipping Cart Page', () => {
    it('Click add to cart and icon shipping cart', () => {
        // Tambah produk
        cy.get('[data-test="add-to-cart"]').click()
        cy.wait(2000)
        // Halaman baru dari keranjang belanja
        cy.get('[data-test="shopping-cart-link"]').click()
        // Validasi halaman keranjang belanja
        cy.get('[data-test="title"]').contains('Your Cart')
    });

    it('Click checkout', () => {
        // Halaman baru dari checkout
        cy.get('[data-test="checkout"]').click()
        cy.wait(2000)
        // Validasi halaman checkout
        cy.get('[data-test="title"]').contains('Checkout: Your Information')
    });
});

describe('Checkout Page', () => {
    it('Clear the first name, last name, and postal code', () => {
        // Hapus data first name, last name, dan postal code jika terdapat value 
        cy.get('[data-test="firstName"]').clear()
        cy.get('[data-test="lastName"]').clear()
        cy.get('[data-test="postalCode"]').clear()
    });

    it('Should try to checkout', () => {
        cy.fixture('user.json').then(user => {
            // Cari user checkout
            const user_checkout = user.find(user => user.first_name === "metty");

            const first_name = user_checkout.first_name;
            const last_name = user_checkout.last_name;
            const postal_code = user_checkout.postal_code;

            // Input data user checkout
            cy.get('[data-test="firstName"]').type(first_name)
            cy.get('[data-test="lastName"]').type(last_name)
            cy.get('[data-test="postalCode"]').type(postal_code)
            
            // Klik Continue
            cy.get('[data-test="continue"]').click()
        })
    });
})

describe('Checkout: Overview Page', () => {
    it('Should check for correct element on the page', () => {
        cy.get('[data-test="title"]').should('contain','Checkout: Overview')

        // Klik Finish
        cy.get('[data-test="finish"]').click()
    });
})