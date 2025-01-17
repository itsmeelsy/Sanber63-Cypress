import saucedemoPageCy from "../../support/pageObject/saucedemoPage.cy"

describe('Saucedemo Add To Cart Scenarios', () => {
  beforeEach(() => {
    cy.visit('')
    cy.loginSaucedemo('standard_user','secret_sauce')
    cy.get('[data-test="title"]').should('contain.text','Products')
  })
  it('Verify to successfully add to cart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').should('contain.text','1')
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').should('not.contain.text','1')
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="shopping-cart-link"]').should('contain.text','2')
    cy.url().should('include','/cart.html')
    cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]').should('contain.text','Sauce Labs Bike Light')
  })
  it('Verify to successfully add to cart (POM)', () => {
    saucedemoPageCy.addBackpack()
    saucedemoPageCy.verifyCart('1')
    saucedemoPageCy.clickRemoveBackpack()
    saucedemoPageCy.verifyCart('')
    saucedemoPageCy.addBikeLight()
    saucedemoPageCy.addTShirt()
    saucedemoPageCy.clickCart()
    saucedemoPageCy.verifyCart('2')
    cy.VerifyURL('/cart.html')
    saucedemoPageCy.verifyCartList()
  })
})