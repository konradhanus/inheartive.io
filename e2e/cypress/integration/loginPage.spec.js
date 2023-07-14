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
        });
    });

    it('Try to login to inHEARTive app properly', function () {
        HomeLoginPage.loginUserWithEmailAndPassword(this.userData.properEmail, this.userData.properPassword);
    });

    it('Test that user can login and logout', function () {
        HomeLoginPage.loginUserWithEmailAndPassword(this.userData.properEmail, this.userData.properPassword);
        AuctionsListPage.checkIfLogoutButtonIsDisplayedAndClickIt();
    })
});
