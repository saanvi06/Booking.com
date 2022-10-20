// <reference types = "cypress" />

import cypressConfig from '../../cypress.config.js';
import HomePage from '../pages/homepage.js';
import './../support/e2e';

describe('QA Tech Assessment', () => 
{ 
    it('visit booking.com website', () => {        
        cy.visit('www.booking.com');
    }),

    it('Click on Attractions link', () => {
        HomePage.clickOnAttractions();
    }),

    it('Click on Search Input and Enter Vancouver location', () => {
        HomePage.clickOnSearchInputAndEnterVancouver('Vancouver');
    }),

    it('Click on Search Button', () => {
        HomePage.clickOnSearchButton();
    }),

    it('Click on Capilano Suspension Bridge attraction', () => {
        HomePage.clickOnCaplianoAttraction();
    }),

    it('Select Date for visting the attraction', () =>{
        HomePage.selectDatesForAttraction();
    }),

    it('Increment the Adult ticket counter by 1', () => {
        HomePage.incrementAdultTicketCounter();
    }),

    it('Navigate to Checkout page', () => {
        HomePage.navigateToCheckout();
    }),
        
    it('Verify Total price', () => {
        HomePage.verifyTotalPrice();
    })
})