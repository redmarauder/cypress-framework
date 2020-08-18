class SummaryPage {

    clickEditButton() {
        cy.get('[data-action="click->confirm#editAction"]').click();
    }

    clickConfirmDetailsButton() {
        cy.get('[data-action="confirm#confirmAction"]').click();
    }

    checkValueOfGiftCard(amount) {
        cy.get('[data-target="confirm.totalSpan"]')
            .invoke('text')
            .then(value => expect(value).to.equal('$' + amount));
    }

    checkSendReceiptToValue(email) {
        cy.get('[data-target="confirm.purchaserEmailSpan"]')
            .invoke('text')
            .then(value => expect(value).to.equal(email));
    }

    checkSendGiftCardToValue(email) {
        cy.get('[data-target="confirm.recipientEmailSpan"]')
            .invoke('text')
            .then(value => expect(value).to.equal(email));
    }

    checkInputValues(amount, email) {
        this.checkValueOfGiftCard(amount);
        this.checkSendGiftCardToValue(email);
        this.checkSendReceiptToValue(email);
    }
}
export default SummaryPage