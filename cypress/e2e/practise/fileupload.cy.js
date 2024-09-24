///<reference types="cypress"/>

describe('fileupload', function(){
    it('scenario1', function(){
        const p = 'Picture.png';
        cy.visit('https://practice.expandtesting.com/upload');
        cy.get('#fileInput').attachFile(p);
        cy.get('#fileSubmit').click();
        //cy.get('#fileSubmit').contains('Picture');

    })
})
