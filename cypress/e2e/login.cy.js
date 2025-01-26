/// <reference types="cypress" />

describe('Deve fazer login com sucesso', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        
    });
 
    //afterEach(() => {
    //cy.screenshot()
    //});
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('email.teste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)'). should('contain', 'A partir do painel de controle de sua conta,')
    });

    it('Deve exibir uma mensagem de erro ao inserir o usuário inválido', () => {
        cy.get('#username').type('email.teste@teste.com')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain','Endereço de e-mail desconhecido.')
        cy.get('.woocommerce-error').should('exist')

    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('email.teste@teste.com.br')
        cy.get('#password').type('teste@000')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha')
        cy.get('.woocommerce-error').should('exist')
        
    });

});