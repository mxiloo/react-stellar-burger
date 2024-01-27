const { selectors } = require("../../support/selectors");

describe('Test App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    });

    // it('Drag and drop test', () => {
    //
    //     // BUNS
    //     cy.get(selectors.ingredientItem).eq(0).should("exist");
    //     cy.get(selectors.ingredientItem).eq(0).trigger("dragstart");
    //     cy.get(selectors.constructorSection).trigger("drop");
    //     cy.get(selectors.ingredientItem).eq(1).should("exist");
    //     cy.get(selectors.ingredientItem).eq(1).trigger("dragstart");
    //     cy.get(selectors.constructorSection).trigger("drop");
    //
    //     // INGREDIENTS
    //     cy.get(selectors.ingredientItem).eq(2).trigger("dragstart");
    //     cy.get(selectors.constructorSection).trigger("drop");
    //     cy.get(selectors.ingredientItem).eq(3).trigger("dragstart");
    //     cy.get(selectors.constructorSection).trigger("drop");
    // })

    it('DND / Login and order test', ()=> {

        cy.get(selectors.ingredientItem).should("exist");
        cy.get(selectors.constructorSection).should("exist");

        // BUNS
        cy.get(selectors.ingredientItem).eq(0).should("exist");
        cy.get(selectors.ingredientItem).eq(0).trigger("dragstart");
        cy.get(selectors.constructorSection).trigger("drop");
        cy.get(selectors.ingredientItem).eq(1).should("exist");
        cy.get(selectors.ingredientItem).eq(1).trigger("dragstart");
        cy.get(selectors.constructorSection).trigger("drop");

        // INGREDIENTS
        cy.get(selectors.ingredientItem).eq(2).trigger("dragstart");
        cy.get(selectors.constructorSection).trigger("drop");
        cy.get(selectors.ingredientItem).eq(3).trigger("dragstart");
        cy.get(selectors.constructorSection).trigger("drop");

        cy.get("button").contains("Оформить заказ").should("exist");
        cy.get("button").contains("Оформить заказ").click();

        cy.get(selectors.emailInput).should("exist");
        cy.get(selectors.emailInput).type("testik222@mail.ru");
        cy.get(selectors.passwordInput).should("exist");
        cy.get(selectors.passwordInput).type("password222");

        cy.get("button").contains("Войти").should("exist");
        cy.get("button").contains("Войти").click();

        cy.get("button").contains("Оформить заказ").should("exist");
        cy.get("button").contains("Оформить заказ").click();
        cy.get(selectors.orderSection).should("exist");
        cy.get(selectors.orderNumber).should("exist");

        cy.get(selectors.closeIcon).should("exist");
        cy.get(selectors.closeIcon).click();
    })
})