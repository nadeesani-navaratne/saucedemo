import LoginPage from "../pages/login-page";
import ProductsPage from "../pages/products-page";

describe('Login page', () => {
    it('should login with valid credentials', () => {
        const username = Cypress.env('username');
        const password = Cypress.env('password');
        cy.login(username, password)
        LoginPage.verifyLogin()
        ProductsPage.verifyProductList()
    });
})