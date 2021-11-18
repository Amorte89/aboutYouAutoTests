export class ShopPage {

    static checkProductPage() {
        return cy.get('[data-test-id="ProductName"]').should('be.visible').contains(Cypress.env('product1'))
    }
    static addProduct() {
        return cy.get('[data-test-id="A2BButton"]').click();
    }
    static checkBasket() {
        return cy.get('[data-test-id="AddToBasketFlyInContainer"]').contains('[data-test-id="ProductImage"]');
    }
    static clickCheckoutButton() {
        return cy.get('[data-test-id="CheckoutButton"]').click();
    }
}
