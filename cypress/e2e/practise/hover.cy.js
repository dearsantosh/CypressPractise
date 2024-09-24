///<reference types='cypress'/>

describe('hovere', function(){
    it('scenario1', function(){
        cy.visit('https://practice.expandtesting.com/hovers');
        cy.get(':nth-child(4) > img').trigger('mouseover'); 
    })
})