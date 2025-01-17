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
Cypress.Commands.add('loginSaucedemo',(username, password) => {
    //cy.visit('/')
    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
})

Cypress.Commands.add('VerifyError', (message) => {
    cy.get('[data-test="error"]').should('have.text', message)
})

Cypress.Commands.add('VerifyURL', (url) => {
    cy.url().should('include',url)
})

Cypress.Commands.add('VerifyContain', (locator,text) => {
    cy.get(locator).should('contain.text', text)
})

Cypress.Commands.add('ketik', (locator,text) => {
    cy.get(locator)
    .should('be.visible')
    .clear()
    .type(text)
})
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