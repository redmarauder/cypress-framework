class HomePage {

    fillEmailInput(email) {
        cy.get('input[data-target="email.purchaserEmailInput"]').type(email);
    }

    fillFirstNameInput(firstName) {
        cy.get('input[data-target="name.purchaserFirstNameInput"]').type(firstName);
    }

    fillLastNameInput(lastName) {
        cy.get('input[data-target="name.purchaserLastNameInput"]').type(lastName);
    }

    selectGiftCardAmount(amount) {
        cy.get('span[data-value="' + amount + '"]').click();
    }

    clickCheckoutButton() {
        cy.get('button[data-target="checkout.checkoutButton"]', { timeout: 10000 }).eq(1).click();
    }
}
export default HomePage