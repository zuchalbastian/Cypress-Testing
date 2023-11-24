/// <reference types = "cypress" />

it('File Upload Test', function () {
    
    cy.visit('https://trytestingthis.netlify.app/')

    //File Upload in Cypress
    cy.get('#myfile').attachFile('Zuchal.jpg')

})