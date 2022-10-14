export class DashboardPage {
    openAddCustomerPage() {
        cy.get('#globalAdd').click()
        cy.get('#add-customer')
          .should('have.text', 'Customer')
          .click()
        cy.url()
          .should('eq','https://factory.katanamrp.com/customer',{timeout: 2000})
    }

    openAddSalesPage() {
        cy.get('#globalAdd').click()
        cy.get('#add-sales')
          .should('have.text','Sales order')
          .click()
        cy.url()
          .should('eq','https://factory.katanamrp.com/salesorder',{timeout: 4000})
    }
}