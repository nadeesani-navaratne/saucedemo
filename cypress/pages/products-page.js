class ProductsPage {
    getProductList() {
        return cy.get('[data-test="inventory-list"]')
    }

    addItemSauceLabsBackPack() {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }

    getRemoveItemSauceLabsBackPackButton() {
        return cy.get('[data-test="remove-sauce-labs-backpack"]')
    }
    verifyEmptyShoppingCart() {

        cy.get('#shopping_cart_container').find('.shopping_cart_badge').should('not.exist');

    }

    verifyShoppingCartCount(count) {
        cy.get('.shopping_cart_badge').should('contain', count);
    }
    verifyProductList() {
        cy.get('[data-test="inventory-list"]').should('be.visible')

    }

    clickOnProduct(productname) {
        cy.get('[data-test="inventory-item-name"]').contains(productname).click()
    }

    clickOnAddToCart() {
        cy.get('[data-test="add-to-cart"]').click()
    }

    verifyPresenceOfRemoveButton() {
        cy.get('[data-test="remove"]').should('be.visible');
    }
} export default new ProductsPage()