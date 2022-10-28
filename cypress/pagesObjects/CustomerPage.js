class CustomerPage {




    inputCustomerNameAndCompany(name,surname,company) {
        cy.get('[data-testid="inputCustomerFirstName"]').type(name)
        cy.get('[data-testid="inputCustomerLastName"]').type(surname)
        cy.get('[data-testid="inputCustomerCompany"] input').type(company)
    }

    createDefaultCustomer(customerName) {
        if (customerName == null){
            this.inputCustomerNameAndCompany('User','Test','Test Company')
        } else {
            this.inputCustomerNameAndCompany(customerName,'Test','Test Company')
        }
        
        this.fillEmail('ab@c.de')
    }

    fillEmail(email) {
        cy.textInput('[data-testid="inputCustomerEmail"] input',email)
    }

    emailLabelColor(color) {
        cy.get('[data-testid=inputCustomerEmail] label').should('have.css', 'color', color)
    }

    fillNumber(phoneNumber) {
        cy.textInput('[data-testid="inputCustomerPhone"] input',phoneNumber)
    }

    fillDisplayName(displayName) {
        cy.textInput('[data-testid="inputCustomerDisplayName"] input',displayName).type('{enter}')
    }

    checkDisplayName(checkDisplayNameText) {
        cy.get('[data-testid="header-name-customer"]').contains(checkDisplayNameText)
    }

    fillComment(comment) {
        cy.textInput('[data-testid="inputCustomerComment"] input',comment)
    }

    openBillingAddressPickerDialog() {
        cy.get('[data-testid="inputCustomerDefaultBillingAddress"]').click()
    }

    openShippingAddressPickerDialog() {
        cy.get('[data-testid="inputCustomerDefaultShippingAddress"]').click()
    }

    fillAddressResponsivePersonData() {
        cy.get('[data-testid="firstNameTextField"]').type('firstName')
        cy.get('[data-testid="gridExtended"] input[name=lastName]').type('lastName')
        cy.get('[data-testid="gridExtended"] input[name=company]').type('Company')
        cy.get('[data-testid="gridExtended"] input[name=phone]').type('+37255667788')
    }

    fillAddressDataAutofill() {
        const streetName = 'Paldiski maantee';

        cy.get('[data-testid="gridStandard"] input[name=line1]').type(streetName +' '+ '{backspace}')
        cy.contains('Paldiski maantee, Tallinn, Estonia').type('{downArrow}, {upArrow}, {enter}')
    }

    clickToRemoveAddress() {
        cy.get('[data-testid="removeAddressButton"]').click()
    }

    fillDefaultAddressDataAndSubmit(client,city) {
        cy.get('[data-testid="firstNameTextField"]').type(client)
        cy.get('input[name=city]').type(city)
        cy.get('[data-testid="submitButton"]').click()
        return this;
    }

    removeAddress(city) {
        cy.get('[data-testid="textAddressInformation"]').contains(city).click()
        this.clickToRemoveAddress();
    }

    clickOnUseBillingAddressButton() {
        cy.get('[class=Loader__content] button').contains('Use billing address').click()
    }

    clickOnHeaderMenuButtonAndSelectDeleteOptionFromMenu() {
        cy.get('span[class="print-hide"] button').click()
        cy.get('[data-testid="cardHeaderMenuButtonDELETE"]').contains('Delete').click()
    }

    clickOnAddAddressButton() {
        cy.get('button[class*="print-hide"] span').filter('Add address').click()
    }

    clickOnOtherAddressMenuButtonAndSelectSetAsDefault() {
        cy.get('button[class*="print-hide"] path[d^="M12').click()
        cy.get('ul[role=menu]').contains('Set as default').click()
    }
    
    clickOnOtherAddressMenuButtonAndSelectDelete() {
        cy.get('button[class*="print-hide"] path[d^="M12').click()
        cy.get('ul[role=menu]').contains('Delete').click()
    }

}

module.exports = new CustomerPage();
//export default CustomerPage;