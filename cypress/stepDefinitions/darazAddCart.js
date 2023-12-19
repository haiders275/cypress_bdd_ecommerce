///<reference types="cypress-xpath"/>
///<reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on Logged in Dashboard after Login',()=>{
    cy.visit("https://member.daraz.pk/user/login?spm=a2a0e.home.header.d5.35e34076vaiAuY&redirect=https%3A%2F%2Fwww.daraz.pk%2F")
    cy.get('.mod-login-input-loginName > input').type("03148484284")
    cy.get('.mod-input-password > input').type("Haiders@123")
    cy.get('.next-btn').click()
    // cy.wait("12000")
    cy.logs("Valid credentials entered and clicked login button.")

})

When('I Search for a Product',()=>{
    const proKeywords="Hugo Boss 1513867 Stainless Steel Wrist Watch for Men"
    cy.get('#q').type(proKeywords)
    cy.xpath('//*[@id="topActionHeader"]/div[1]/div[2]/div/div[2]/form/div/div[2]/button').click()
    // cy.wait(7000)
    cy.logs("Product keywords entered for search and clicked search icon.")

})


When('I click on Product via Search',()=>{
    cy.xpath('//*[@id="root"]/div/div[2]/div/div/div[1]/div[2]/div/div/div/div[1]/div/a/img').should("be.visible").click()
    cy.wait(7000)
    cy.logs("Product is visible after search and clicked.")

})

Then('Product details are shown with Add To Cart button',()=>{
    cy.get("#module_product_price_1 > div > div > span").should("be.visible")
    let addToCart=cy.xpath('//*[@id="module_add_to_cart"]/div/button[2]')
    addToCart.should("be.visible")
    addToCart.should("have.text","Add to Cart")
    cy.logs("Product details are shown with Add to Cart button.")

})

When('I click on Add To Cart button and Navigate to Shopping Cart',()=>{
    cy.xpath('//*[@id="module_add_to_cart"]/div/button[2]').click()
    cy.logs("Clicked on Add to Cart button.")

    cy.wait(7000)
    cy.get("#topActionCartNumber").click()
    cy.logs("Clicked on Shopping cart to navigate.")
})
Then('Product is added in Shoppting Cart',()=>{
    cy.xpath('#item_i1f7aa06e > div > div.cart-item-left > div.content').should("be.visible")
    cy.logs("Product details are stored in Shopping cart.")
})