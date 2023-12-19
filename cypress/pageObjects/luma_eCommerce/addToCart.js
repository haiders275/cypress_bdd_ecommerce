class addCart{
    elements={
        firstName:()=> cy.get('#firstname'),
        lastName:()=> cy.get('#lastname'),
        userEmail:()=> cy.get('#email_address'),
        password:()=> cy.get('#password'),
        confirmPassword:()=> cy.get('#password-confirmation'),
        submitButton:()=> cy.get('#form-validate > div > div.primary > button'),
        verifyMsgText:()=>cy.get('#maincontent > div.page.messages > div:nth-child(2) > div > div > div'),
        verifyErrMsg:()=>cy.get('#firstname-error')
    }



/**
 * @abstract
 * @code
 * enterFirstName(){
        this.elements.firstName().clear()
        this.elements.firstName().type("TestSig")
    }
 * @file test.txt
 * @author ABDULLAH
 * @date 2012-12-12
 * 
 */
    
    /**
     * @export
     * @classdesc
     * @extends
     * @implements {IAction}
     *
     * @memberof addCart
     * 
     */
    enterFirstName(){
        this.elements.firstName().clear()
        this.elements.firstName().type("TestSig")
    }

    enterLastName(){
        this.elements.lastName().clear()
        this.elements.lastName().type("Haider")
    }


    enterEmail(){
        this.elements.userEmail().clear()
        this.elements.userEmail().type("haidertestsig12@yopmail.com")
    }

    enterPassword(){
        this.elements.password().clear()
        this.elements.password().type("Haiders@123")
    }

    
    enterConfirmPassword(){
        this.elements.confirmPassword().clear()
        this.elements.confirmPassword().type("Haiders@123")
    }


    clickSubmitButton(){
        this.elements.submitButton().should("be.visible")
        this.elements.submitButton().click()
    }

    verifySuccessMsg(){
        this.elements.verifyMsgText().should("be.visible")
    }

    verifyErrorMsg(){
        this.elements.verifyErrMsg().should("be.visible")
    }

}

export default addCart;
