///<reference types="cypress-xpath"/>
///<reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import createAccount from "../pageObjects/luma_eCommerce/lumaRegistrationPage";

const registObj=new createAccount()

Given('I open Registration Page and Verify Title',()=>{
    cy.visit("https://magento.softwaretestingboard.com/customer/account/create/")
    titleText="Create New Customer Account"
    cy.title().should("eq",titleText)
    cy.logs("eCommerce page title is verified.")
})

When('I Enter valid inputs in all mandatory fields',()=>{
    
    registObj.enterFirstName()
    cy.logs("Valid First Name is entered.")
    
    registObj.enterLastName()
    cy.logs("Valid Last Name is entered.")

    registObj.enterEmail()
    cy.logs("Valid User Email is entered.")

    registObj.enterPassword()
    cy.logs("Valid User Password is entered.")

    registObj.enterConfirmPassword()
    cy.logs("Valid & Confirmed password is entered.")

})

When('I click on Submit button',()=>{
    registObj.clickSubmitButton()
    cy.wait(8000)
    cy.logs("Clicked on Submit button.")
})

Then('I should get Registration success message',()=>{
    registObj.verifySuccessMsg()
    cy.logs("Verified Registration success message.")
})


When('I Enter inputs not in all mandatory fields',()=>{
    
    registObj.enterLastName()
    cy.logs("Valid User Last Name is entered.")

    registObj.enterEmail()
    cy.logs("Valid User Email is entered.")
    
    registObj.enterPassword()
    cy.logs("Valid User Password is entered.")

    registObj.enterConfirmPassword()
    cy.logs("Valid User confirm password is entered.")

})

When ('I click on Submit button without FirstName',()=>{
    registObj.clickSubmitButton()
    cy.wait(8000)
    cy.logs("Clicked on Submit button.")
})

Then('I should get Registration error message',()=>{
    registObj.verifyErrorMsg()
    cy.logs("Verified Registration Error message.")
})