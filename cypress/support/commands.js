// Comando para adicionar um produto ao carrinho
Cypress.Commands.add('adicionarProdutoAoCarrinho', (index) => {
    cy.get('.products').find('.product').eq(index).click();
    cy.get('.single_add_to_cart_button').click();
    cy.wait(500);
  });
  