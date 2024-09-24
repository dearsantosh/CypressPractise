///<reference types="cypress"/>

describe('dragandropp', function(){
    it('scenario', function(){
        cy.visit('https://practice.expandtesting.com/drag-and-drop');

        // check initial order
        cy.get('div.column')
        .then($cols => [...$cols].map(col => col.innerText.trim()))
        .should('deep.eq', ['A', 'B']);

        const dataTransfer = new DataTransfer;

        cy.get("#column-a")
        .trigger('dragstart', {dataTransfer})
        cy.get("#column-b")
        .trigger('dragenter')
        .trigger('dragover', {dataTransfer})
        .trigger('drop', {dataTransfer})
        cy.get("#column-a")
        .trigger('dragend')

        // check new order
        cy.get('div.column')
        .then($cols => [...$cols].map(col => col.innerText.trim()))
        .should('deep.eq', ['B', 'A'])
    })
})