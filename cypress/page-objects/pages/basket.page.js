export class BasketPage {

    static checkProductPage() {
        return cy.get('[class="basket-container"]').should('be.visible')
    }
    static clickContinuePayment() {
        return cy.get('[type="submit"]').click();
    }
}
