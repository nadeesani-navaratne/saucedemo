import LoginPage from "../pages/login-page"

Cypress.Commands.add('login', (username, password) => {
    
    cy.visit('/'); 
    LoginPage.fillUsername(username)
    LoginPage.fillPassword(password)
    LoginPage.clickLogin()
})
