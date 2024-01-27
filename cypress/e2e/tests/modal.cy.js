const { selectors } = require("../../support/selectors");

describe('Popup tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    });

    it('Closed by button', () => {
        cy.get(selectors.ingredientItem).first().click();
        cy.get(selectors.containerDetails).should("exist");
        cy.get(selectors.closeIcon).click();
        cy.get(selectors.rootApp).should('not.include.text', 'Детали ингредиента');
    });

    it('Closed by overlay', () => {
        cy.get(selectors.ingredientItem).first().click();
        cy.get(selectors.containerDetails).should("exist");
        cy.get(selectors.modalOverlay).get('body').click(0, 0);
        cy.get(selectors.rootApp).should('not.include.text', 'Детали ингредиента');
    });

    it('Closed by press Escape', () => {
        cy.get(selectors.ingredientItem).first().click();
        cy.get(selectors.containerDetails).should("exist");
        cy.get('body').type('{esc}');
        cy.get(selectors.rootApp).should('not.include.text', 'Детали ингредиента');
    });
})
