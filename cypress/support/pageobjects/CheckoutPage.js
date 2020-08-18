class CheckoutPage {

    clickIFrameElement(element) {
        cy.iframe('iframe[id*="hostedform"]', element)
            .find(element)
            .click();
    }

    fillIframeInput(element, value) {
        cy.iframe('iframe[id*="hostedform"]', element)
            .find(element)
            .type(value)
    }

    clickEditButton() {
        cy.get('[data-action="click->confirm#editAction"]').click();
    }

    clickSubmitButton() {
        this.clickIFrameElement('#submitButton');
    }

    fillNameInput(value) {
        this.fillIframeInput('#card-name', value);
    }

    fillZipCodeInput(value) {
        this.fillIframeInput('#card-zip', value);
    }

    fillCardNumberInput(value) {
        this.fillIframeInput('#card-number', value);
    }

    fillExpirationInput(value) {
        this.fillIframeInput('#card-expiry', value);
    }

    fillSecurityCodeInput(value) {
        this.fillIframeInput('#card-security', value);
    }
}
export default CheckoutPage