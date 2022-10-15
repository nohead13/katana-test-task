export class LoginPage {

  navigate() {
    cy.visit('https://katanamrp.com/login/')
  }

  validateDashboardPage() {
    cy.url()
      .should('eq','https://factory.katanamrp.com/sales',{timeout: 4000})
  }
}