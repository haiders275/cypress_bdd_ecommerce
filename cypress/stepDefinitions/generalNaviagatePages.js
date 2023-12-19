///<reference types="cypress-xpath"/>
///<reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I open eCommerce Page and Verify Title',()=>{
    cy.visit("https://magento.softwaretestingboard.com/")
    titleText="Home Page"
    cy.title().should("eq",titleText)
    cy.logs("eCommerce page title is verified.")
})

When('I Click on Store Menu-1',()=>{
    cy.get("#ui-id-3").should("be.visible").click()
    cy.logs("Store Menu-1 Option is Clicked.")
    cy.wait(6000)


})

Then('I verify Title and Content on What New Page',()=>{
    cy.title().should("eq","What's New")
    cy.get("#page-title-heading > span").should("be.visible")
    cy.wait(5000)

})

When('I Click on Store Menu-Women',()=>{
    cy.get("#ui-id-4").should("be.visible").click()
    cy.wait(6000)
    cy.logs("Store Menu-Women Option is Clicked.")
})

Then('I verify Title and Content on Women Page',()=>{
    cy.title().should("eq","Women")
    cy.get("#page-title-heading > span").should("be.visible")
    cy.wait(5000)

})

When('I Click on Store Menu-Men',()=>{
    cy.get("#ui-id-5").should("be.visible").click()
    cy.wait(6000)
    cy.logs("Store Menu-Men Option is Clicked.")
})

Then('I verify Title and Content on Men Page',()=>{
    cy.title().should("eq","Men")
    cy.get("#page-title-heading > span").should("be.visible")
    cy.wait(5000)

})

When('I Click on Store Menu-Gear',()=>{
    cy.get("#ui-id-6").should("be.visible").click()
    cy.wait(6000)
    cy.logs("Store Menu-Gear Option is Clicked.")
})

Then('I verify Title and Content on Gear Page',()=>{
    cy.title().should("eq","Gear")
    cy.get("#page-title-heading > span").should("be.visible")
    cy.wait(5000)
})

When('I navigate to Home Page',()=>{
    cy.get("body > div.page-wrapper > header > div.header.content > a > img").should("be.visible").click()
    cy.wait(6000)
    cy.logs("Home Page Icon is Clicked.")


})

Then('I verify Title and Content on Home Page',()=>{
    cy.title().should("eq","Home Page")
    cy.get("#maincontent > div.columns > div > div.widget.block.block-static-block > div.blocks-promo > div > a.block-promo.home-pants > img").should("be.visible")

})