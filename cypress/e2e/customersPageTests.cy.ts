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