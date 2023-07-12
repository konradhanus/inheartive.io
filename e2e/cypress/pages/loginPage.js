class HomeLoginPage {

    elements = {
        userEmailInput: () => cy.get('#field-3-input'),
        userPasswordInput: () => cy.get('input[placeholder="Password"]'),
        signInButton: () => cy.contains('div[role="button"]', 'Sign in')
    }

    loginUserWithEmailAndPassword(email, password) {
        this.typeUserEmail(email);
        this.typeUserPassword(password);
        this.clickSignInButton();
    }

    typeUserEmail(email) {
        this.elements.userEmailInput().type(email);
    }

    typeUserPassword(password) {
        this.elements.userPasswordInput().type(password);
    }

    clickSignInButton() {
        cy.intercept('POST', '/api/login').as('loginRequest');

        this.elements.signInButton().click();

        cy.wait('@loginRequest').then((interception) => {
            expect(interception.response.statusCode).to.equal(201);
        });
    }
}

export default new HomeLoginPage();