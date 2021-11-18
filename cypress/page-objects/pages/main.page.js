export class MainPage {

    static checkMainLogo() {
        return cy.get('[data-test-id="HeaderAboutYouLogo"]').should('be.visible')
    }
    static checkUserLogo() {
        return cy.get('[data-test-id="UserName"]').should('be.visible')
    }
    static clickUserIcon() {
        return cy.get('[data-test-id="UserAccount"]').click()
    }
    static closePopUp() {
        return cy.get('[data-test-id="Close_Toggler"]').click()
    }
    static clickCookieAccept() {
        return cy.get('[id="onetrust-accept-btn-handler"]').click()
    }
    static clickCloseInternationalPopup() {
        return cy.get('[data-testid="modalDialogCloseIcon"]').click()
    }
    static clickSearchButton() {
        return cy.get('[data-test-id="SearchButton"]').click()
    }
    static fillSearchField() {
        return cy.get('[type="text""]').first().type(Cypress.env('product')).type('{enter}')
    }
}
