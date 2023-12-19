
class lumaLogin{

    elements={
        username:()=> cy.get('#email'),
        password:()=> cy.get('#pass'),
        buttonLogin:()=> cy.get('#send2'),
        verifyText:()=> cy.get('1body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.greet.welcome > span')
    }

    enterUserName(){
        this.elements.username().clear()
        this.elements.username().type("haidertestsig12@yopmail.com")
    }

    enterPassword(){
        this.elements.password().clear()
        this.elements.password().type("Testing@123")
    }

    clickLoginButton(){
        this.elements.buttonLogin().click()
    }

    verifyTextHome(){
        this.elements.verifyText().should("be.visible")
    }
}

export default lumaLogin;