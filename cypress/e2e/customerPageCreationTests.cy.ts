import { DashboardPage } from "../pagesObjects/DashboardPage";
import { LoginPage } from "../pagesObjects/LoginPage";
import { CustomerPage } from "../pagesObjects/CustomerPage";
import { CustomersPage } from "../pagesObjects/CustomersPage";
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const customerPage = new CustomerPage();
const customersPage = new CustomersPage();

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

  it('Delete customer in Create new customer view and check opened customer list page', () => {
    customerPage.clickOnHeaderMenuButtonAndSelectDeleteOptionFromMenu()
    cy.get('[data-testid="confirmDeleteButton"]').click()
    cy.url().should('eq','https://factory.katanamrp.com/contacts/customers',{timeout: 2000})
  })

})


