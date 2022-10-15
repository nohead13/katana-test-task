export class CustomersPage {
    fillNameFieldOfFilterAndSelectCheckBox(name) {
        cy.get('[data-testid="nameFilterInput"]').clear().type(name) 
        cy.get('[class="ag-selection-checkbox"] input[class="ag-input-field-input ag-checkbox-input"]').check()
    }
    
    clickOnBulkActionMenuAndSelectDelete() {
        cy.get('nav button').contains('Bulk actions').click()
        cy.get('[data-testid="bulkPrintMenuItem-0-0"]').click()
        cy.get('[data-testid="confirmDeleteButton"]').click()
    }

    checkThatPageHaveNoResultToShow() {
        cy.get('[class="ag-overlay"] span').contains('No Rows To Show')
    }
    
}