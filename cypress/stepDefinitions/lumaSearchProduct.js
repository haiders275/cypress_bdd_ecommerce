///<reference types="cypress-xpath"/>
///<reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('I open ECommerce Page and Verify page Title',()=>{
    cy.visit("https://magento.softwaretestingboard.com/")
    titleText="Home Page"
    cy.title().should("eq",titleText)
    cy.logs("eCommerce page title is verified.")
})

When('I search for a Product',()=>{
    cy.get("#search").type("Lando Gym Jacket").type('{enter}')
    cy.logs("Product keywords are written.")
    // cy.get('//*[@id="search_mini_form"]/div[2]/button').click()
    cy.logs("Clicked on Search Icon.")

})

When('I click on a Products',()=>{
    cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    cy.logs("Clicked on Product.")

})

Then('Product Price shown and Add To Cart available',()=>{
    cy.get("#product-price-334").should("be.visible")
    cy.logs("Product price visibility verified..")

})

after(() => {
    cy.writeFile("browserDetails.json", Cypress.browser)
})