class AuctionsListPage {

    elements = {
        dropDownMenu: () => cy.get('[style*="appearance: none"]'),
        logoutButton: () => cy.get('option[value="Logout"]'),
    }

    checkIfLogoutButtonIsDisplayedAndClickIt() {
        this.elements.logoutButton().should('contain.value', 'Logout');
        this.elements.dropDownMenu().select('Logout').should('have.value', 'Logout');
    }

}

export default new AuctionsListPage();