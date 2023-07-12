/// <reference types="cypress" />

import AuctionsListPage from '../pages/auctionsListPage';
import HomeLoginPage from '../pages/loginPage';

// const { data } = require("cypress/types/jquery")


// ## TO DO - 1. Create Page object model and add locators in different pages.


context('Login', () => {
    beforeEach(function () {
        cy.visit('/');
        cy.fixture('userData').then((data) => {
            this.userData = data;
            cy.log('userData: ', this.userData);
        });
    });

    it('Try to login to inHEARTive app properly', function () {
        cy.wait(5); // Add assertion instead of just wait.
        HomeLoginPage.loginUserWithEmailAndPassword(this.userData.properEmail, this.userData.properPassword);
    });

    it('Test that user can login and logout', function () {
        cy.wait(5);
        HomeLoginPage.loginUserWithEmailAndPassword(this.userData.properEmail, this.userData.properPassword);
        AuctionsListPage.checkIfLogoutButtonIsDisplayedAndClickIt();
    })
});
