/// <reference types="cypress" />

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

    it('Login to inHEARTive app properly', function () {
        //Wait
        // cy.wait(5); // Assertion instead of wait
        cy.get([alt="Logo"]).should('be.visible');
        //Interaction
        cy.get('#field-3-input').type(this.userData.properEmail);
        cy.get('input[placeholder="Password"]').type(this.userData.properPassword);
        cy.contains('div[role="button"]', 'Sign in').click();
        //Assert
        cy.get('option[value="Logout"]').should('contain.value', 'Logout')

    });
});
      