class CheckoutPage {

    fillFirstName(firstname) {
        cy.get('[data-test="firstName"]').type(firstname)
    }

    fillLastName(lastname) {
        cy.get('[data-test="lastName"]').type(lastname)
    }

    fillPostalCode(postalcode) {
        cy.get('[data-test="postalCode"]').type(postalcode)
    }

    clickContinueButton() {
        cy.get('[data-test="continue"]').click()
    }

    clickFinishButton() {
        cy.get('[data-test="finish"]').click()
    }

    getSuccessfullMessage() {
        return cy.get('[data-test="complete-header"]')
    }

    verifySuccessfullMessage(orderSuccessMessage) {
        cy.get('[data-test="complete-header"]').should('have.text', orderSuccessMessage)

    }

    fillCheckoutForm(firstname, lastname, postalcode) {
        this.fillFirstName(firstname);
        this.fillLastName(lastname);
        this.fillPostalCode(postalcode);
        this.clickContinueButton();
    }
}

export default new CheckoutPage()