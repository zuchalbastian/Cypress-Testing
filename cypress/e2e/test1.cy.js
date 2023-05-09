/// <reference types = "cypress" />

it('Google Search', function(){
     cy.visit('https://www.google.com')

     cy.get('.SDkEP').type('Automation step by step{Enter}')

    //  cy.contains('Penelusuran Google').click()
    // cy.wait(2000)
    cy.contains('Video').click()
})