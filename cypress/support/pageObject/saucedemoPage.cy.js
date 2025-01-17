class saucedemoPage {
    username = '#user-name'
    password = '#password'
    login_btn = '#login-button'
    error_msg = '[data-test="error"]'
    title  = '[data-test="title"]'
    backpack = '[data-test="add-to-cart-sauce-labs-backpack"]'
    cart = '[data-test="shopping-cart-link"]'
    removeBackpack = '[data-test="remove-sauce-labs-backpack"]'
    bikeLight = '[data-test="add-to-cart-sauce-labs-bike-light"]'
    TShirt = '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'
    cartList = '[data-test="item-0-title-link"] > [data-test="inventory-item-name"]'

    clickLogin(){
        cy.get(this.login_btn).click()
    }

    addBackpack(){
        cy.get(this.backpack).click()
    }

    addBikeLight(){
        cy.get(this.bikeLight).click()
    }

    addTShirt(){
        cy.get(this.TShirt).click()
    }

    clickRemoveBackpack(){
        cy.get(this.removeBackpack).click()
    }

    verifyCart(cartValue){
        cy.get(this.cart).should('contain.text',cartValue)
    }

    clickCart(){
        cy.get(this.cart).click()
    }

    verifyCartList(){
        cy.get(this.cartList).should('contain.text','Sauce Labs Bike Light')
    }
}
module.exports = new saucedemoPage()