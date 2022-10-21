class HomePage
{
    //Click on Attractions link after visiting booking.com website
    clickOnAttractions()
    {
         return cy.get('iframe')
                  .get('[class="bui-tab__link"]').eq(3)
                  .click({force:true});
    }
    
    //Enter Vancouver as destination search text
    clickOnSearchInputAndEnterVancouver(searchText)
    {
        return cy.get('iframe')
                 .get('[data-testid="search-input-field"]')
                 .click()
                 .type(searchText);          
    }

    //Select Vancouver, British Columbia from the list of options
    selectCity()
    {
        return cy.get('[city="vancouver"]')
                 .first()
                 .click({force:true});
    }

    //Click on search button after selecting the city
    clickOnSearchButton()
    {
        return cy.get('[type="submit"]')
                 .click();
    }

    //Select Capilano Suspension bridge from the list of attractions
    clickOnCaplianoAttraction()
    {
        return cy.get('[title="Capilano Suspension Bridge Park Admission"]')
                 .invoke('removeAttr', 'target')
                 .click(); //Workaround in cypress to open the link in the same tab

    }

    //Select date to visit the attraction
    selectDatesForAttraction()
    {
        return cy.get('[data-testid="datepicker"]')
                 .click()                 
                 .contains('2022-10-24')
                 .click({force:true});
    }

    //Increment the adult ticket counter by 1
    incrementAdultTicketCounter()
    {
        return cy.get('[class="fc63351294 a822bdf511 e3c025e003 fa565176a8 f7db01295e e1b7cfea84 d64a4ea64d"]')
                 .first()
                 .click();
    }

    //Navigate to checkout page
    navigateToCheckout()
    {
        return cy.get('[data-testid="select-ticket"]')
                 .click();
    }

    //Verify the Total price for booking the attraction
    verifyTotalPrice()
    {
        return cy.get('[data-testid="price-breakdown-total"]').eq(2);
    }

}
export default new HomePage();