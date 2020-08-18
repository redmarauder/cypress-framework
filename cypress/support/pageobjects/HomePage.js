class HomePage {

    selectSendToSomeoneElseTab() {
        cy.get('[data-target="tabs.sendToOtherTab"]').click();
    }

    selectGiftCardAmount(value) {
        if (value == 200) {
            cy.get('[data-target="amount.otherOptionButton"]').click();
            cy.get('[data-target="amount.otherInput"]').type(value);
        } else {
            cy.get('[data-value="' + value + '"]').click();
        }
    }

    fillEmailInput(email) {
        cy.get('[data-target="email.purchaserEmailInput"]').type(email);
    }

    fillFirstNameInput(firstName) {
        cy.get('[data-target="name.purchaserFirstNameInput"]').type(firstName);
    }

    fillLastNameInput(lastName) {
        cy.get('[data-target="name.purchaserLastNameInput"]').type(lastName);
    }

    fillRecipientEmailInput(recipientEmail) {
        cy.get('[data-target="email.recipientEmailInput"]').type(recipientEmail);
    }

    fillMessageForRecipientInput(messageForRecipient) {
        cy.get('textarea[data-target="email.recipientMessageInput"]').type(messageForRecipient);
    }

    clickCheckoutButton() {
        cy.get('button[data-target="checkout.checkoutButton"]', { timeout: 10000 }).eq(1).click();
    }

    checkTotalCostValue(amount) {
        cy.get('[data-target="checkout.price"]').eq(1)
            .invoke('text')
            .then(value => expect(value).to.equal('$' + amount));
    }

    checkEmailAddressValue(email) {
        cy.get('[data-target="email.purchaserEmailInput"]')
            .invoke('val')
            .then(value => expect(value).to.equal(email));
    }

    checkFirstNameValue(firstName) {
        cy.get('[data-target="name.purchaserFirstNameInput"]')
            .invoke('val')
            .then(value => expect(value).to.equal(firstName));
    }

    checkLastNameValue(lastName) {
        cy.get('[data-target="name.purchaserLastNameInput"]')
            .invoke('val')
            .then(value => expect(value).to.equal(lastName));
    }

    checkInputValues(amount, email, firstName, lastName) {
        this.checkTotalCostValue(amount);
        this.checkEmailAddressValue(email);
        this.checkFirstNameValue(firstName);
        this.checkLastNameValue(lastName);
    }
}
export default HomePage