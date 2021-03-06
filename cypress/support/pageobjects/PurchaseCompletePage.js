class PurchaseCompletePage {

    clickDoneButton() {
        cy.get('[data-action="application#doneAction"]', { timeout: 10000 }).click();
    }

    checkIfEmailWasDelivered() {
        cy.get('.text-xl.font-bold', { timeout: 30000 }).invoke('text').then((giftCardNumber) => {
            this.clickDoneButton();
            cy.wait(5000);
            cy.getLastEmailAsJson().then(json => {
                cy.writeFile('email.txt', json, 'binary');
                cy.readFile('email.txt').then((file) => {
                    expect(file).to.contain('hello@phorest.com');
                    expect(file).to.contain(giftCardNumber.trim());
                })
            });
        })
    }
}
export default PurchaseCompletePage