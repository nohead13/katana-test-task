import { DashboardPage } from "../pages/DashboardPage";
import {LoginPage} from "../pages/LoginPage";
import { CustomerPage } from "../pages/CustomerPage";
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const customerPage = new CustomerPage();

describe('Add new customer in Contacts screen', () => {
  
  before('login to dashboardPage', ()=>{
    Cypress.on('uncaught:exception', (err) => {
      return false;
    });
    cy.login()
    loginPage.validateDashboardPage()
    cy.visit('/customer')
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