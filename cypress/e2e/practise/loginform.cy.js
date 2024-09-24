/// <reference types="cypress" />

describe('AddRemove', function () {
    it('Scenario 1', function (){
       cy.visit("https://practice.expandtesting.com/login");
       cy.scrollTo('bottom');
       cy.get('#username').type('practice');
       cy.get('#password').type('SuperSecretPassword!');
       cy.get('#login > .btn').click();
    });
 });