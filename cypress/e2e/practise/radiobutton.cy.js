/// <reference types="cypress" />

describe('radiobutton',function(){
    it('scenario1', function(){
        cy.visit('https://practice.expandtesting.com/radio-buttons');
        cy.get('#red').click();
        cy.wait(4000);
        cy.get('#yellow').click();
        cy.wait(4000);
        cy.get('#black').click();
        cy.wait(4000);
        cy.get('#football').click();
        cy.wait(4000);
        cy.get('#tennis').click();
    })
})