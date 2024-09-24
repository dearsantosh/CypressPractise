///<reference types = "cypress"/>

describe('formvalidation', function(){
    it('scenario1', function(){
        cy.visit('https://practice.expandtesting.com/form-validation');

        cy.get('#validationCustom01').clear();
        cy.get('#validationCustom01').type('Santosh Chhetri');
        cy.get(':nth-child(2) > #validationCustom05').type('012-3456789');
        cy.get('input[name="pickupdate"]').click();
        cy.get('input[name="pickupdate"]').type('2024-09-10');
        cy.get('#validationCustom04').select('card');
        cy.get('.col-12 > .btn').click();
    })
})