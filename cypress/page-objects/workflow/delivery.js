export class Delivery {

  static fillDeliveryAddress() {
    return cy.get('form').contains('[class="address-form"]').within(() => {
      cy.get('[name="streetHouseNumber"]').type('Test')
      cy.get('[name="additional"]').type('Test')
      cy.get('[name="zipCode"]').type('123123')
      cy.get('[name="city"]').type('123123')
    })
  }
}
