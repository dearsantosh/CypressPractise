/// <reference types="cypress" />

describe('browserinfo', function(){
    it('scenario1', function(){
        cy.visit('https://practice.expandtesting.com/my-browser');
        cy.get('#browser-toggle').click();
        cy.scrollTo('bottom');

    })
})