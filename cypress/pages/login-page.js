class LoginPage {


    fillUsername(username) {
        cy.get('#user-name').type(username);
    }


    fillPassword(password) {
        cy.get('#password').type(password);
    }


    clickLogin() {
        cy.get('#login-button').click();
    }

    verifyLogin(){
        cy.url().should('include', '/inventory.html');
        
    }
}

export default new LoginPage();
