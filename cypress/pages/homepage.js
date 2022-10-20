class HomePage
{
   /*  elements: {
        attractions:'[data-decider-header="attractions"]';
        searchInput:'[name="query"]';
        searchButton:'[type="submit"]';
        attractionTitle:'[title="Capilano Suspension Bridge Park Admission"]';
        datePicker:'[data-testid="datepicker"]';
        ticketIncrementor:'[class="fc63351294 a822bdf511 e3c025e003 fa565176a8 f7db01295e e1b7cfea84 d64a4ea64d"]'; //first element
        nextButton: '[data-testid="select-ticket"]';
        totalBeforeNext: '[class="css-j7qwjs"]'; //2nd element
        totalAfterNext: '[data-testid="price-breakdown-total"]'; //2nd element
    } */
    
    clickOnAttractions()
    {
         return cy.get('iframe')
                  .get('[class="bui-tab__link"]').eq(4)
                  .click();
    }
    
    clickOnSearchInputAndEnterVancouver(searchText)
    {
         cy.get('[name="query"]')
           .click();
         cy.type(searchText);
         return this;
    }

    clickOnSearchButton()
    {
        return cy.get('[type="submit"]')
                 .click();
    }

    clickOnCaplianoAttraction()
    {
        return cy.get('[title="Capilano Suspension Bridge Park Admission"]')
                 .invoke('removeAttr', 'target')
                 .click(); //Workaround in cypress to open the link in the same tab

    }

    selectDatesForAttraction()
    {
        return cy.get('[data-testid="datepicker"]')
                 .click()
                 .type('10/24/2022');
    }

    incrementAdultTicketCounter()
    {
        return cy.get('[class="fc63351294 a822bdf511 e3c025e003 fa565176a8 f7db01295e e1b7cfea84 d64a4ea64d"]')
                 .first()
                 .click();
    }

    navigateToCheckout()
    {
        return cy.get('[data-testid="select-ticket"]')
                 .click();
    }

    verifyTotalPrice()
    {
        return cy.get('[data-testid="price-breakdown-total"]').eq(2);
    }

}
export default new HomePage();