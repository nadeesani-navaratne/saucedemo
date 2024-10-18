import CheckoutPage from "../pages/checkout-page";
import ProductsPage from "../pages/products-page";
import ShoppingCartPage from "../pages/shopping-cart-page";

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
    const username = Cypress.env('username');
    const password = Cypress.env('password');
    cy.login(username, password);
  })
  it('should add a product to the cart and complete the order successfully', () => {
    const productName = productData[0].name;
    ProductsPage.clickOnProduct(productName)
    ProductsPage.clickOnAddToCart()
    ShoppingCartPage.clickShoppingCartIcon()
    ShoppingCartPage.clickCheckoutButton()

    // Fill out the checkout form
    CheckoutPage.fillFirstName(userData.firstname)
    CheckoutPage.fillLastName(userData.lastname)
    CheckoutPage.fillPostalCode(userData.postalcode)
    CheckoutPage.clickContinueButton()

    // Verify product details in the cart
    ShoppingCartPage.verifyProductName(productName)
    ShoppingCartPage.verifyProductPrice(productData[0].price)
    ShoppingCartPage.verifyProductDescription(productData[0].description)
    
    CheckoutPage.clickFinishButton()
    CheckoutPage.verifySuccessfullMessage(applicationData.ordersuccessmessage)
  })
})