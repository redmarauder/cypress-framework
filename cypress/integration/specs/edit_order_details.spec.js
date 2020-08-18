// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import HomePage from '../../support/pageobjects/HomePage';
import SummaryPage from '../../support/pageobjects/SummaryPage';
import CheckoutPage from '../../support/pageobjects/CheckoutPage';

describe('As a customer I want to edit the details of my order', function () {

    beforeEach(function () {
        cy.fixture('user').then(function (data) {
            this.data = data;
        })
        cy.fixture('value').then(function (value) {
            this.value = value;
        })
    })

    it(`the order details should be correct after editing the details from the summary page`, function () {
        const homePage = new HomePage();
        const summaryPage = new SummaryPage();

        cy.visit(Cypress.env('url'));

        homePage.selectGiftCardAmount(this.value.fifty);
        homePage.fillEmailInput(this.data.email);
        homePage.fillFirstNameInput(this.data.firstName);
        homePage.fillLastNameInput(this.data.lastName);
        homePage.clickCheckoutButton();

        summaryPage.checkOrderDetails(this.value.fifty, this.data.email);
        summaryPage.clickEditButton();

        homePage.checkOrderDetails(this.value.fifty, this.data.email, this.data.firstName, this.data.lastName);
        homePage.clickCheckoutButton();

        summaryPage.checkOrderDetails(this.value.fifty, this.data.email);
        summaryPage.clickConfirmDetailsButton();
        summaryPage.checkOrderDetails(this.value.fifty, this.data.email);
    })

    it(`the order details should be correct after editing the details from the checkout page`, function () {
        const homePage = new HomePage();
        const summaryPage = new SummaryPage();
        const checkoutPage = new CheckoutPage();

        cy.visit(Cypress.env('url'));

        homePage.selectGiftCardAmount(this.value.fifty);
        homePage.fillEmailInput(this.data.email);
        homePage.fillFirstNameInput(this.data.firstName);
        homePage.fillLastNameInput(this.data.lastName);
        homePage.clickCheckoutButton();

        summaryPage.clickConfirmDetailsButton();

        checkoutPage.clickEditButton();

        homePage.checkOrderDetails(this.value.fifty, this.data.email, this.data.firstName, this.data.lastName);
        homePage.clickCheckoutButton();

        summaryPage.checkOrderDetails(this.value.fifty, this.data.email);
    })
})