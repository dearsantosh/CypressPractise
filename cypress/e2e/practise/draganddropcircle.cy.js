/// <reference types="cypress" />

describe('draganddropcircle', function(){
    it('scenario1', function(){
        cy.visit('https://practice.expandtesting.com/drag-and-drop-circles');

        const dataTransfer = new DataTransfer;

        cy.get('.red')
        .trigger('dragstart', {dataTransfer})
        cy.get('#target')
        .trigger('dragenter')
        .trigger('dragover', {dataTransfer})
        .trigger('drop', {dataTransfer})
        cy.get('.red')
        .trigger('dragend')

        cy.get('.green')
        .trigger('dragstart', {dataTransfer})
        cy.get('#target')
        .trigger('dragenter')
        .trigger('dragover', {dataTransfer})
        .trigger('drop', {dataTransfer})
        cy.get('.green')
        .trigger('dragend')

        cy.get('.blue')
        .trigger('dragstart', {dataTransfer})
        cy.get('#target')
        .trigger('dragenter')
        .trigger('dragover', {dataTransfer})
        .trigger('drop', {dataTransfer})
        cy.get('.blue')
        .trigger('dragend')

    })
})