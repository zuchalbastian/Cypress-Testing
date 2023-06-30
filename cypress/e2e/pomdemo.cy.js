import { LoginTest } from "./pages/login_test"

const loginTest = new LoginTest()

beforeEach(function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

describe('All Login Test', function(){

    it('Login with valid credential', function(){
        
        loginTest.enterUsername('Admin')
        loginTest.enterPassword('admin123')
        loginTest.clickLogin()
        
        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        // cy.get('.oxd-button').click()
    
        cy.get(':nth-child(8) > .oxd-main-menu-item').click()
    })
    
    it('Login with invalid username', function(){
    
        //cy.visit('https://opensource-demo.orangehrmlive.com/')
    
        loginTest.enterUsername('Admin123')
        loginTest.enterPassword('admin123')
        loginTest.clickLogin()
    
        cy.get(':nth-child(8) > .oxd-main-menu-item').click()
    })

})

it('Login with invalid password', function(){
    
    //cy.visit('https://opensource-demo.orangehrmlive.com/')

    loginTest.enterUsername('Admin')
    loginTest.enterPassword('admin456')
    loginTest.clickLogin()

    cy.get(':nth-child(8) > .oxd-main-menu-item').click()
})

//How to group test in cypress
//.only untuk menampilkan fungsi itu saja
//.skip untuk melompati fungsi tersebut
//beforeEach untuk menduplikasi suatu link pada fungsi