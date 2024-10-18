import ProductsPage from "../pages/products-page";

describe('Products page', () => {

  beforeEach(() => {
    const username = Cypress.env('username');
    const password = Cypress.env('password');
    cy.login(username, password);
  })

  it('should add products to the cart', () => {
    cy.fixture('products-details').then((productdata) => {
      ProductsPage.verifyEmptyShoppingCart()
      ProductsPage.clickOnProduct(productdata[0].name)
      ProductsPage.clickOnAddToCart()
      ProductsPage.verifyPresenceOfRemoveButton()
      ProductsPage.verifyShoppingCartCount('1')
    })
  })
});
