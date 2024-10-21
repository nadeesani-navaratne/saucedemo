

class ShoppingCartPage {


    clickShoppingCartIcon() {
        cy.get('[data-test="shopping-cart-link"]').click()
    }


    clickCheckoutButton() {
        cy.get('[data-test="checkout"]').click()
    }


    verifyProductName(productname) {
        cy.get('[data-test="inventory-item-name"]').should('have.text', productname)
    }

    verifyProductPrice(productprice) {
        cy.get('[data-test="inventory-item-price"]').should('have.text', productprice)
    }


    verifyProductDescription(productdescription) {
        cy.get('[data-test="inventory-item-desc"]').should('have.text', productdescription)
    }

    verifyProductDetailsInCart(productName, productprice, productdescription) {
        this.verifyProductName(productName);
        this.verifyProductPrice(productprice);
        this.verifyProductDescription(productdescription);
    }
    proceedToCheckout() {
        this.clickShoppingCartIcon();
        this.clickCheckoutButton();
    }
}
export default new ShoppingCartPage()