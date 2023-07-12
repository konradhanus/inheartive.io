/// <reference types="cypress" />

describe("E2E - Home Page", () => {
    it("Should open home page - inHEARTive", () => {
        cy.visit("/")
    })
})