declare namespace Cypress {
    interface Chainable<Subject> {
    /**
     * This will log user in
     */
    login(): Cypress.Chainable<Element>;
    /**
     * This will input text in text field in field with issue of missing letters.
     * @param locator string
     * @param text string
     */
    textInput(locator:string, text:string): void;
  }
}



// Have issues in version = 9.7.0, 10.0.0-10.0.3, same as issue https://github.com/cypress-io/cypress/issues/3817 
// Missing letters when using type
// Made workaround to solve this problem

Cypress.Commands.add('textInput',(locator:string, text:string) => {
    return cy.get(locator).type('test').clear().type(text,{delay:200}).should('have.value',text)
})

Cypress.Commands.add('login', () => {
    var testUsername, testPassword

    cy.fixture('users.json').as('users')

    cy.get('@users').then((users) => {
      
      testUsername = users.username
      testPassword = users.password

    cy.visit('https://katanamrp.com/login/')
    cy.get('#1-email')
        .should('have.attr', 'placeholder', 'Your business email')
        .type(testUsername).should('have.value', testUsername)
    cy.get('[id="1-password"]')
        .should('have.attr', 'placeholder', 'Your password')
        .type(testPassword, { log: false })
    cy.get('[id="1-submit"] .auth0-label-submit').should('have.text', 'Sign in').click()
    cy.url()
      .should('eq','https://factory.katanamrp.com/sales',{timeout: 4000})
    })    
})