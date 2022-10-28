import {LoginPage} from "../pagesObjects/LoginPage";
import { CustomerPage } from "../pagesObjects/CustomerPage";
import { CustomersPage } from "../pagesObjects/CustomersPage";
const loginPage = new LoginPage();
const customerPage = new CustomerPage();
const customersPage = new CustomersPage();

describe('Add new customer in Contacts screen', () => {
  
  before('login to dashboardPage', ()=>{
    cy.login()
    loginPage.validateDashboardPage()
    cy.visit('/customer')
    })

    after('Delete all test customers', () => {
        cy.visit('/contacts/customers')
        customersPage.fillNameFieldOfFilterAndSelectCheckBox('test')
        customersPage.clickOnBulkActionMenuAndSelectDelete()
      })

    it('Check email formatting error for username only and an @ sign', () => {
        customerPage.fillEmail('mail@')
        customerPage.emailLabelColor('rgb(228, 44, 0)')
    })

    it('Check email formatting error for  username and an @ sign, and a domain name.', () => {
        customerPage.fillEmail('mail@not')
        customerPage.emailLabelColor('rgb(228, 44, 0)')
    })

    it('Check email formatting error for  username and an @ sign, and a domain name.', () => {
        customerPage.fillEmail('mail@not.com')
        customerPage.emailLabelColor('rgb(0, 62, 155)')
    })

    it('Check input display name special characters', () => {
        customerPage.fillDisplayName('漢字 á é í ó ú ü ñ Œ ƒ ⊕ test')
        customerPage.checkDisplayName('漢字 á é í ó ú ü ñ Œ ƒ ⊕ test')
    })
})