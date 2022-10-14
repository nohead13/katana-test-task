import { DashboardPage } from "../pages/DashboardPage";
import { LoginPage } from "../pages/LoginPage";
import { CustomerPage } from "../pages/CustomerPage";
import { CustomersPage } from "../pages/CustomersPage";
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
  
    it('Delete customer form the Customers list page', () => {
      customerPage.createDefaultCustomer('Bob')
      cy.visit('/contacts/customers')
      customersPage.fillNameFieldOfFilterAndSelectCheckBox('Bob')
      customersPage.clickOnBulkActionMenuAndSelectDelete()
      customersPage.checkThatPageHaveNoResultToShow() // flaky place, sometimes element shown, sometimes not.
    })

  })