///<reference types="cypress-xpath"/>
///<reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import lumaLogin from "../pageObjects/luma_eCommerce/lumaLoginPage";


const loginObj1=new lumaLogin()


Given('I Logged in and landed on Home Dashboard',()=>{
    cy.visit("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/")
    titleText="Customer Login"
    cy.title().should("eq",titleText)
    cy.logs("eCommerce page title is verified.")
    loginObj1.enterUserName()
    cy.logs("Valid User Name is entered.")

    loginObj1.enterPassword()
    cy.logs("Valid Password is entered.")

    loginObj1.clickLoginButton()
    cy.wait(5000)
    cy.logs("Clicked on Login button.")

})

When ('I verified content on Home Dashboard',()=>{
    loginObj1.verifyTextHome()
    cy.logs("Verified text on Home Page after successful Login.")
})

Then('I Search for a required Product',()=>{
    cy.get("#search").type("Lando Gym Jacket").type('{enter}')
    cy.logs("Product keywords are written for search.")
    // cy.get('//*[@id="search_mini_form"]/div[2]/button').click()
    cy.logs("Clicked on Search Icon.")

})
When ('I click on Product appears on Search',()=>{
    cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    cy.logs("Clicked on Product.")
    cy.wait(5000)

})

When ('I select color, size, quantity and click on Add To Cart button',()=>{
    cy.get("#option-label-size-143-item-168").click()
    cy.logs("Size is selected.")
    // cy.wait(5000)

    cy.get("#option-label-color-93-item-52").click()
    cy.logs("Color is selected.")
    // cy.wait(5000)
    
    cy.get("#qty").clear().type("2")
    cy.logs("Quantity is entered.")
    // cy.wait(5000)

    cy.get('#product-addtocart-button').should("be.visible").click({force:true})
    cy.logs("Clicked on Add to Cart Button.")
    cy.wait(6000)

})
Then ('I Navigate to Shopping Cart',()=>{
    cy.get('#maincontent > div.page.messages > div:nth-child(2) > div > div > div > a').should("be.visible").click()
    cy.logs("Navigating to Shoping Cart.")
    // cy.wait(6000)

})

Then('Selected Product is added in Shoppting Cart',()=>{

    cy.get("#shopping-cart-table > tbody > tr.item-info > td.col.item > div > strong > a").should("be.visible")
    cy.wait(4000)
    cy.get("#shopping-cart-table > tbody > tr.item-info > td.col.subtotal > span > span > span").should("be.visible")
    cy.logs("Product details are stored in Shopping Cart.")
})


When ('I click on Proceed to Checkout',()=>{
    let checkOut=cy.get('#maincontent > div.columns > div > div.cart-container > div.cart-summary > ul > li:nth-child(1) > button')
    checkOut.should('be.visible')
    cy.logs('Proceed to Checkout button is visible.')
    checkOut.click()
    cy.wait(8000)
    cy.logs('Clikced on Checkout button.')

})
Then('Navigated to Payment and Shipping page',()=>{
    cy.get('.shipping-address-item').should('be.visible')
    cy.logs('Payment Methods and Shipping details are shown')
    
})

When ('I select payment method and click Next button',()=>{
    cy.get('#checkout-shipping-method-load > table > tbody > tr:nth-child(1) > td:nth-child(1) > input').click()
    cy.logs('Payment mehtod selected.')
    cy.get('#shipping-method-buttons-container > div > button').click()
    cy.logs('Clicked on Next button.')
})

Then ('Navigated to Order Summary page',()=>{
    cy.get('#opc-sidebar > div.opc-block-summary > span').should('be.visible')
    cy.logs('Order Summary details are visible.')
    cy.get('#checkout-payment-method-load > div > div > div.payment-method._active > div.payment-method-content > div.actions-toolbar > div > button').should('be.visible')
    cy.logs('Place Order button is visible.')
})
When ('I click on Place Order button',()=>{
    cy.get('#checkout-payment-method-load > div > div > div.payment-method._active > div.payment-method-content > div.actions-toolbar > div > button').click()
    cy.logs('Clicked on Place Order button')

})

Then ('Navigated to Thank you page',()=>{
    cy.get('#maincontent > div.page-title-wrapper > h1 > span').should('be.visible')
    cy.logs('thank you message shown')
})