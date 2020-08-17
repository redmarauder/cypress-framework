// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import HomePage from '../../support/pageobjects/HomePage';
import SummaryPage from '../../support/pageobjects/SummaryPage';
import CheckoutPage from '../../support/pageobjects/CheckoutPage';
import PurchaseCompletePage from '../../support/pageobjects/PurchaseCompletePage';

describe('Check if confirmation email was successfully delivered', function () {

    before(function () {
        cy.fixture('user').then(function (data) {
            this.data = data;
        })
    })

    it(`Purchase gift card and verify confirmation email by 'Send to me'`, function () {
        const homePage = new HomePage();
        const summaryPage = new SummaryPage();
        const checkoutPage = new CheckoutPage();
        const purchaseCompletePage = new PurchaseCompletePage();

        cy.visit(Cypress.env('url'));

        homePage.selectGiftCardAmount(100);
        homePage.fillEmailInput(this.data.email);
        homePage.fillFirstNameInput(this.data.firstName);
        homePage.fillLastNameInput(this.data.lastName);
        homePage.clickCheckoutButton();

        summaryPage.clickEditButton();
        homePage.clickCheckoutButton();
        summaryPage.clickConfirmButton();

        checkoutPage.clickEditButton();
        homePage.clickCheckoutButton();
        summaryPage.clickConfirmButton();

        checkoutPage.fillNameInput(this.data.creditCard.name);
        checkoutPage.fillZipCodeInput(this.data.creditCard.zipCode);
        checkoutPage.fillCardNumberInput(this.data.creditCard.cardNumber);
        checkoutPage.fillExpirationInput(this.data.creditCard.expirationDate);
        checkoutPage.fillSecurityCodeInput(this.data.creditCard.securityCode);
        checkoutPage.clickSubmitButton();

        purchaseCompletePage.checkIfEmailWasDelivered();
    })

    it(`Purchase gift card and verify confirmation email by 'Send to someone else'`, function () {
        const homePage = new HomePage();
        const summaryPage = new SummaryPage();
        const checkoutPage = new CheckoutPage();
        const purchaseCompletePage = new PurchaseCompletePage();

        cy.visit(Cypress.env('url'));

        homePage.selectGiftCardAmount(100);
        homePage.fillEmailInput(this.data.email);
        homePage.fillFirstNameInput(this.data.firstName);
        homePage.fillLastNameInput(this.data.lastName);
        homePage.clickCheckoutButton();

        summaryPage.clickEditButton();
        homePage.clickCheckoutButton();
        summaryPage.clickConfirmButton();

        checkoutPage.clickEditButton();
        homePage.clickCheckoutButton();
        summaryPage.clickConfirmButton();

        checkoutPage.fillNameInput(this.data.creditCard.name);
        checkoutPage.fillZipCodeInput(this.data.creditCard.zipCode);
        checkoutPage.fillCardNumberInput(this.data.creditCard.cardNumber);
        checkoutPage.fillExpirationInput(this.data.creditCard.expirationDate);
        checkoutPage.fillSecurityCodeInput(this.data.creditCard.securityCode);
        checkoutPage.clickSubmitButton();

        purchaseCompletePage.checkIfEmailWasDelivered();
    })
})