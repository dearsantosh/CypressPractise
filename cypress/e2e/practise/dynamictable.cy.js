/// <reference types="cypress" />

describe('dynamictable', function () {
    it('Scenario 1', function (){
       cy.visit("https://practice.expandtesting.com/dynamic-table");
       cy.get(':nth-child(3) > :nth-child(5)').find('span').should('have.text','0.7%');
      
    });
 });