/// <reference types = "cypress" />
/// <reference types="cypress-downloadfile"/>

it('File Upload Test', function () {
    
    cy.visit('https://trytestingthis.netlify.app/')

    //File Upload in Cypress
    cy.get('#myfile').attachFile('Zuchal.jpg')

})

it('File Download Test', function () {

    //File Download in Cypress
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg','MyCustomAgentName')
    
})