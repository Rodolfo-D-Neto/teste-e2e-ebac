class CheckoutPage {
  irParaCheckout(url) {
    cy.visit(url + '/cart'); // Acessa a página do carrinho
    cy.get('.checkout-button').click(); // Clica para ir para o checkout
  }

  preencherCheckout(cliente) {
    cy.get('#billing_first_name').type(cliente.nome); // Nome
    cy.get('#billing_last_name').type(cliente.sobrenome); // Sobrenome
    cy.get('#billing_company').type(cliente.empresa); // Empresa
    cy.get('#billing_address_1').type(cliente.endereco); // Endereço
    cy.get('#billing_city').type(cliente.cidade); // Cidade
    cy.get('#billing_state').select(cliente.estado); // Estado
    cy.get('#billing_postcode').type(cliente.cep); // CEP
    cy.get('#billing_phone').type(cliente.telefone); // Telefone
    cy.get('#billing_email').type(cliente.email); // E-mail
  }

  finalizarCompra() {
    cy.get('#place_order').click(); // Finaliza o pedido
  }
}

export default new CheckoutPage();
