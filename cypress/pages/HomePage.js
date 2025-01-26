class HomePage {
  visitar(url) {
    cy.visit("http://lojaebac.ebaconline.art.br/produtos/"); // Acessa a URL passada como parâmetro
  }

  selecionarProduto(indice) {
    cy.get('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover').eq(indice).click(); // Seleciona o produto pelo índice
  }

  adicionarProdutoAoCarrinho() {
    cy.get('.single_add_to_cart_button').click(); // Clica em "Adicionar ao carrinho"
    cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho'); // Valida mensagem de sucesso
  }

  voltarParaLista(url) {
    cy.visit(url); // Retorna à lista de produtos, utilizando o URL fornecido
  }
}

export default new HomePage();
