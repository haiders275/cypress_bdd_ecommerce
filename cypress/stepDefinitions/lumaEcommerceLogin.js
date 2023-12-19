///<reference types="cypress-xpath"/>
///<reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import lumaLogin from "../pageObjects/luma_eCommerce/lumaLoginPage";


const loginObj=new lumaLogin()

Given('I open eCommerce luma Login Page and Verify Title',()=>{
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")
    titleText="Customer Login"
    cy.title().should("eq",titleText)
    cy.logs("eCommerce page title is verified.")
})

When('I Enter valid UserName1 and Password',()=>{
    loginObj.enterUserName()
    cy.logs("Valid User Name is entered.")

    loginObj.enterPassword()
    cy.logs("Valid Password is entered.")
    
})

When('I click on luma Login button',()=>{
    loginObj.clickLoginButton()
    cy.wait(8000)
    cy.logs("Clicked on Login button.")
})

Then('I should be landed on luma logged in dashboard',()=>{
    loginObj.verifyTextHome()
    cy.logs("Verified text on Home Page after successful Login.")
})