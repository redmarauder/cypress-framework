class HomePage {

    selectSendToSomeoneElseTab() {
        cy.get('a[data-target="tabs.sendToOtherTab"]').click();
    }

    selectGiftCardAmount(value) {
        if (value == 200) {
            cy.get('span[data-target="amount.otherOptionButton"]').click();
            cy.get('input[data-target="amount.otherInput"]').type(value);
        } else {
            cy.get('span[data-value="' + value + '"]').click();
        }
    }

    fillEmailInput(email) {
        cy.get('input[data-target="email.purchaserEmailInput"]').type(email);
    }

    fillFirstNameInput(firstName) {
        cy.get('input[data-target="name.purchaserFirstNameInput"]').type(firstName);
    }

    fillLastNameInput(lastName) {
        cy.get('input[data-target="name.purchaserLastNameInput"]').type(lastName);
    }

    fillRecipientEmailInput(recipientEmail) {
        cy.get('input[data-target="email.recipientEmailInput"]').type(recipientEmail);
    }

    fillMessageForRecipientInput(messageForRecipient) {
        cy.get('textarea[data-target="email.recipientMessageInput"]').type(messageForRecipient);
    }

    clickCheckoutButton() {
        cy.get('button[data-target="checkout.checkoutButton"]', { timeout: 10000 }).eq(1).click();
    }
}
export default HomePage