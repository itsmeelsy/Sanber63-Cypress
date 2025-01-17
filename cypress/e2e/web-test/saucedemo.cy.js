import saucedemoPageCy from "../../support/pageObject/saucedemoPage.cy"

describe('Saucedemo Login Scenarios', () => {
  beforeEach(() => {
    cy.visit('')
  })
  it('login success', () => {
    cy.loginSaucedemo('standard_user','secret_sauce')
    cy.get('[data-test="title"]').should('contain.text','Products')
  })
  it('login failed - empty username', () => {
    cy.get('#password').type('secret_sauce')
    //cy.get('#login-button').click()
    saucedemoPageCy.clickLogin()
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required')
  })
  it('login failed - empty password', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required')
  })
  it('login failed - locked user', () => {
    cy.loginSaucedemo('locked_out_user','secret_sauce')
    cy.VerifyError('Epic sadface: Sorry, this user has been locked out.')
    //cy.get('#user-name').type('locked_out_user')
    //cy.get('#password').type('secret_sauce')
    //cy.get('#login-button').click()
    //cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
  })
  it.skip('login env', () => {
    cy.get('#user-name').type(Cypress.env('userprod'))
    cy.get('#password').type('secret_sauce')
    cy.get('#ogin-button').click()})
})