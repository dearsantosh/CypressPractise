///<reference types='cypress'/>

describe('key press', function(){
    it('scenario1', function(){
        cy.visit('https://practice.expandtesting.com/key-presses?');
        cy.get('#target').type('{backspace}');
    })
})