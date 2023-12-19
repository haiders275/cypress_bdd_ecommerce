///<reference types="cypress-xpath"/>
///<reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I open SwagLab Login Page and Verified Title',()=>
{
    cy.visit("https://www.saucedemo.com")
    cy.wait(2)
    cy.title().should("eq","Swag Labs")
    cy.logs("eCommerce page title is verified.")
    cy.get('#user-name').clear().type("standard_user")
    cy.get('#password').clear().type("secret_sauce")

})

When('I Login SwagLab and Verified Title',()=>{
    cy.get('#user-name').clear().type("standard_user")
    cy.get('#password').clear().type("secret_sauce")
    cy.get('#login-button').click()
    cy.title().should("eq","Swag Labs")

    cy.logs("Products list is displayed.")
})

When('I click on a Product',()=>{
    cy.get("#item_4_title_link > div").should('be.visible').click()
})

When('I click on Add To Cart',()=>{
    cy.get("#add-to-cart-sauce-labs-backpack").should("be.visible").click()
})


Then('Product shown with Price in Buying Cart',()=>{
    cy.get("#shopping_cart_container > a").should("be.visible").click()
    cy.wait(5)
    const addToCartText="Your Cart"
    cy.get('#header_container > div.header_secondary_container > span').invoke('text').should("eq",addToCartText)
    // cy.get("#cart_contents_container > div > div.cart_list > div.cart_item > div.cart_item_label > div.item_pricebar > div").should('be.visible')
})
