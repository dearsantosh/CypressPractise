/// <reference types="cypress" />

describe('Webinputs', function () {
       it('Scenario 1', function (){
          cy.visit("https://practice.expandtesting.com/inputs");
          cy.get('#input-number').type('123456789');
          cy.get('#input-text').type('Santosh Chhetri');
          cy.get('#input-password').type('Test@123');
          cy.get('#input-date').type('2024-04-29');
          cy.get('#btn-display-inputs').click();
          cy.wait(4000);
          cy.get('#btn-clear-inputs').click();
       });
    });