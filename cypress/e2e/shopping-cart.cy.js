import CheckoutPage from "../pages/checkout-page";
import ProductsPage from "../pages/products-page";
import ShoppingCartPage from "../pages/shopping-cart-page";
const username = Cypress.env('username');
const password = Cypress.env('password');

describe('Shopping cart', () => {
  // Assuming user details and product details use for multiple tests
  let productData;
  let userData;
  let applicationData;

  before(() => {
    // Load the fixture data once before all tests
    cy.fixture('products-details').then((data) => {
      productData = data;
    });
    cy.fixture('user-details').then((data) => {
      userData = data;
    });
    cy.fixture('application-details').then((data) => {
      applicationData = data;
    });
  });

  beforeEach(() => {
    cy.login(username, password);
  })

  it('should add a product to the cart and complete the order successfully', () => {
    const product = productData.find(item => item.name === "Sauce Labs Backpack");
    const productName = product.name;
    ProductsPage.addProductToCart(productName)
    ShoppingCartPage.proceedToCheckout()
    CheckoutPage.fillCheckoutForm(userData.firstname, userData.lastname, userData.postalcode)
    ShoppingCartPage.verifyProductDetailsInCart(productName, product.price, product.description)
    CheckoutPage.clickFinishButton()
    CheckoutPage.verifySuccessfullMessage(applicationData.orderSuccessMessage)
  })
})