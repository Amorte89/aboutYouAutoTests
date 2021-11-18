export class LoginPage {
    static fillEmailField() {
        return cy.get('[name="email"]').type(Cypress.env('email'))
    }
    static fillPassField() {
        return cy.get('[name="password"]').type(Cypress.env('password'))
    }
    static clickLoginButton() {
        return cy.get('[type="submit"]').click()
    }
}
