import HomePage from '../../cypress/pages/HomePage';
import CheckoutPage from  '../../cypress/pages/CheckoutPage';
describe.only('Fluxo de Pedido na Loja EBAC', () => {
  beforeEach(() => {
    HomePage.visitar();
  });

  it('Deve realizar um pedido de ponta a ponta', () => {
    cy.fixture('cliente').then((cliente) => {
      // Adicionar 4 produtos ao carrinho
      for (let i = 0; i < 4; i++) {
        HomePage.buscarProdutoLista()
        HomePage.addProdutoCarrinho()
        HomePage.visitar('');
      }

      // Ir para o checkout e preencher os dados do cliente
      CheckoutPage.irParaCheckout(cliente);
      CheckoutPage.preencherCheckout(cliente);

      // Finalizar a compra
      CheckoutPage.finalizarCompra();

      // Validar a confirmação da compra
      cy.get('.woocommerce-thankyou-order-received').should('contain', 'Pedido finalizado com sucesso');
    });
  });
});
