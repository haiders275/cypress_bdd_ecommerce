///<reference types="cypress-xpath"/>
///<reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import darazLogin from "../pageObjects/daraz_eCommerce/loginPage";


const loginObj=new darazLogin()

Given('I open eCommerce Login Page and Verify Title',()=>{
    cy.visit("https://member.daraz.pk/user/login?spm=a2a0e.home.header.d5.35e34076vaiAuY&redirect=https%3A%2F%2Fwww.daraz.pk%2F")
    titleText="Daraz.pk: Online Shopping Pakistan - Mobiles, Tablets, Home Appliances, TV, Audio &amp; More"
    cy.title().should("eq",titleText)
    cy.logs("eCommerce page title is verified.")
})

When('I Enter valid UserName and Password',()=>{
    loginObj.enterUserName()
    cy.logs("Valid User Name is entered.")

    loginObj.enterPassword()
    cy.logs("Valid Password is entered.")
    
})

When('I click on Login button',()=>{
    loginObj.clickLoginButton()
    cy.wait(8000)
    cy.logs("Clicked on Login button.")
})

Then('I should be landed on logged in dashboard',()=>{
    loginObj.verifyTextHome()
    cy.logs("Verified text on Home Page after successful Login.")
})