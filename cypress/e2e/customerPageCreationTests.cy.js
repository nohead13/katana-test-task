import { DashboardPage } from "../pages/DashboardPage";
import { LoginPage } from "../pages/LoginPage";
import { CustomerPage } from "../pages/CustomerPage";
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const customerPage = new CustomerPage();

describe('Add new customer in Contacts screen', () => {
  
  beforeEach('login to dashboardPage', () => {
    Cypress.on('uncaught:exception', (err) => {
      return false;
    });
  
    cy.login()
    loginPage.validateDashboardPage()
    dashboardPage.openAddCustomerPage()
    customerPage.createDefaultCustomer()
  }) 

  after('Delete all test customers', () => {
    cy.visit('/contacts/customers')
    customersPage.fillNameFieldOfFilterAndSelectCheckBox('test')
    customersPage.clickOnBulkActionMenuAndSelectDelete()
  })

  it('New customer with custom Display name and Comment', () => {
    customerPage.fillNumber('+3725555555')
    customerPage.fillDisplayName('King Richard [TESTUSER]')
    customerPage.fillComment('Comment !@#$ ÜÕÄÖ ыйхъ')   
  })

  it('Add billing address to customer', () => {
    customerPage.openBillingAddressPickerDialog()
    customerPage.fillAddressResponsivePersonData()
    customerPage.fillAddressDataAutofill()  
  })

  it('Add shipping address to customer', () => {
    customerPage.openShippingAddressPickerDialog()
    customerPage.fillAddressResponsivePersonData()
    customerPage.fillAddressDataAutofill()  
  })

  it('Add Billing and Shipping address, then use use Billing address for shipping', () => {
    customerPage.openShippingAddressPickerDialog()
    customerPage.fillDefaultAddressDataAndSubmit('Test1','Tallinn')
    customerPage.openBillingAddressPickerDialog()
    customerPage.fillDefaultAddressDataAndSubmit('Test2','Riga')
    customerPage.clickOnUseBillingAddressButton()
  })

})


