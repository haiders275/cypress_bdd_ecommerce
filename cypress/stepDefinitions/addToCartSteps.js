///<reference types="cypress-xpath"/>
///<reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I open ECommerce Page and Verify Title',()=>{
    cy.visit("https://magento.softwaretestingboard.com/")
    titleText="Home Page"
    cy.title().should("eq",titleText)
    cy.logs("eCommerce page title is verified.")
})

When('I select a Product via Search',()=>{
    cy.get("#search").type("Lando Gym Jacket").type('{enter}')
    cy.logs("Product keywords are written.")
    // cy.get('//*[@id="search_mini_form"]/div[2]/button').click()
    cy.logs("Clicked on Search Icon.")
    cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    cy.logs("Clicked on Product.")
    cy.wait(10000)

})

Then('I select Size, Color and Quantity',()=>{
    cy.get("#option-label-size-143-item-168").click()
    cy.logs("Size is selected.")
    cy.wait(5000)

    cy.get("#option-label-color-93-item-52").click()
    cy.logs("Color is selected.")
    cy.wait(5000)
    
    cy.get("#qty").clear().type("2")
    cy.logs("Quantity is entered.")
    cy.wait(5000)


})

Then('I Click Add to Cart Button',()=>{
    cy.get('#product-addtocart-button').should("be.visible").click({force:true})
    cy.logs("Clicked on Add to Cart Button.")
    cy.wait(6000)

})

When('I navigate to Shopping Cart',()=>{
    cy.get('#maincontent > div.page.messages > div:nth-child(2) > div > div > div > a').should("be.visible").click()
    cy.logs("Navigating to Shoping Cart.")
    cy.wait(6000)
})

Then('Product details are Stored in Shopping Cart',()=>{
    cy.get("#shopping-cart-table > tbody > tr.item-info > td.col.item > div > strong > a").should("be.visible")
    cy.wait(4000)
    cy.get("#shopping-cart-table > tbody > tr.item-info > td.col.subtotal > span > span > span").should("be.visible")
    cy.logs("Product details are stored in Shopping Cart.")

})
