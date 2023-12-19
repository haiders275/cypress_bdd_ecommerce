
class darazLogin{

    elements={
        username:()=> cy.get('.mod-login-input-loginName > input'),
        password:()=> cy.get('.mod-input-password > input'),
        buttonLogin:()=> cy.get('.next-btn'),
        verifyText:()=> cy.get('#myAccountTrigger')
    }

    enterUserName(){
        this.elements.username().clear()
        this.elements.username().type("03148484284")
    }

    enterPassword(){
        this.elements.password().clear()
        this.elements.password().type("Haiders@123")
    }

    clickLoginButton(){
        this.elements.buttonLogin().click()
    }

    verifyTextHome(){
        this.elements.verifyText().should("be.visible")
    }
}

export default darazLogin;