import { DashboardPage } from "../pagesObjects/DashboardPage";
import { LoginPage } from "../pagesObjects/LoginPage";
import { CustomerPage } from "../pagesObjects/CustomerPage";
import { CustomersPage } from "../pagesObjects/CustomersPage";
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const customerPage = new CustomerPage();
const customersPage = new CustomersPage();

describe('Customers list', () => {

    beforeEach('login to dashboardPage', () => {
      Cypress.on('uncaught:exception', (err) => {
        return false;
      });
      cy.login()
      loginPage.validateDashboardPage()
      dashboardPage.openAddCustomerPage()
    })

    after('Delete all test customers', () => {
      cy.visit('/contacts/customers')
      customersPage.fillNameFieldOfFilterAndSelectCheckBox('test')
      customersPage.clickOnBulkActionMenuAndSelectDelete()
    })
  
    it('Delete customer form the Customers list page', () => {
      customerPage.createDefaultCustomer('Bob')
      cy.visit('/contacts/customers')
      customersPage.fillNameFieldOfFilterAndSelectCheckBox('Bob')
      customersPage.clickOnBulkActionMenuAndSelectDelete()
      customersPage.checkThatPageHaveNoResultToShow() // flaky place, sometimes element shown, sometimes not.
    })

  })