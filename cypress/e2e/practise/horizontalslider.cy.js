///<reference types='cypress'/>

describe('horizontal slider', function(){
    it('scenario1', function(){
        cy.visit('https://practice.expandtesting.com/horizontal-slider');

        cy.get('input')
        .invoke('val', 400)
        .trigger('change'); // Trigger the 'change' event after setting value
    })
})