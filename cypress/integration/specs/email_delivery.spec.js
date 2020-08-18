// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import HomePage from '../../support/pageobjects/HomePage';
import SummaryPage from '../../support/pageobjects/SummaryPage';
import CheckoutPage from '../../support/pageobjects/CheckoutPage';
import PurchaseCompletePage from '../../support/pageobjects/PurchaseCompletePage';

describe('As a customer I want to check if confirmation email was successfully delivered', function () {
    const homePage = new HomePage();
    const summaryPage = new SummaryPage();
    const checkoutPage = new CheckoutPage();
    const purchaseCompletePage = new PurchaseCompletePage();

    beforeEach(function () {
        cy.fixture('user').then(function (user) {
            this.user = user;
        })
    })

    var values = [50, 100, 150, 200];
    values.forEach((value) => {

        it(`When I purchase a gift card and 'Send to me' with value of ${value}, a confirmation email should be delivered`, function () {

            cy.visit(Cypress.env('url'));

            homePage.selectGiftCardAmount(value);
            homePage.fillEmailInput(this.user.email);
            homePage.fillFirstNameInput(this.user.firstName);
            homePage.fillLastNameInput(this.user.lastName);
            homePage.clickCheckoutButton();

            summaryPage.clickConfirmDetailsButton();

            checkoutPage.fillNameInput(this.user.creditCard.name);
            checkoutPage.fillZipCodeInput(this.user.creditCard.zipCode);
            checkoutPage.fillCardNumberInput(this.user.creditCard.cardNumber);
            checkoutPage.fillExpirationInput(this.user.creditCard.expirationDate);
            checkoutPage.fillSecurityCodeInput(this.user.creditCard.securityCode);
            checkoutPage.clickSubmitButton();

            purchaseCompletePage.checkIfEmailWasDelivered();
        })
    })

    values.forEach((value) => {

        it(`When I purchase a gift card and 'Send to someone else' with value of ${value}, a confirmation email should be delivered`, function () {

            cy.visit(Cypress.env('url'));

            homePage.selectSendToSomeoneElseTab();
            homePage.selectGiftCardAmount(value);
            homePage.fillEmailInput(this.user.email);
            homePage.fillFirstNameInput(this.user.firstName);
            homePage.fillLastNameInput(this.user.lastName);
            homePage.fillRecipientEmailInput(this.user.recipientEmail);
            homePage.fillMessageForRecipientInput(this.user.message);
            homePage.clickCheckoutButton();

            summaryPage.clickConfirmDetailsButton();

            checkoutPage.fillNameInput(this.user.creditCard.name);
            checkoutPage.fillZipCodeInput(this.user.creditCard.zipCode);
            checkoutPage.fillCardNumberInput(this.user.creditCard.cardNumber);
            checkoutPage.fillExpirationInput(this.user.creditCard.expirationDate);
            checkoutPage.fillSecurityCodeInput(this.user.creditCard.securityCode);
            checkoutPage.clickSubmitButton();

            purchaseCompletePage.checkIfEmailWasDelivered();
        })
    })
})