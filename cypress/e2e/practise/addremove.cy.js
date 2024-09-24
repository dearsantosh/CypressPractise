/// <reference types="cypress" />

describe('AddRemove', function () {
    it('Scenario 1', function (){
       cy.visit("https://practice.expandtesting.com/add-remove-elements");
       cy.get('.container > .btn').click();
       cy.wait(4000);
       cy.get('.added-manually').click(); 
    });
 });