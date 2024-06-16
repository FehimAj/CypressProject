describe('Amazon Checkout Flow Tests', () => {
    beforeEach(() => {
      cy.visit('https://www.amazon.com/');
    });
  
    it('should add multiple products to the cart and proceed to checkout', () => {
      
      cy.get('#twotabsearchtextbox').type('headphones{enter}');
      cy.get('.s-main-slot .s-result-item').first().find('a').click();
      cy.get('#add-to-cart-button').click();
      cy.get('#nav-cart-count').should('contain', '1');
  
      cy.visit('https://www.amazon.com/');
      cy.get('#twotabsearchtextbox').clear().type('smartwatch{enter}');
      cy.get('.s-main-slot .s-result-item').first().find('a').click();
      cy.get('#add-to-cart-button').click();
      cy.get('#nav-cart-count').should('contain', '2');
  
      cy.get('#nav-cart').click();
      cy.get('.sc-list-item-content').should('have.length', 2);
      cy.contains('Proceed to checkout').click();
      cy.url().should('include', '/checkout');
      
    });
  
  });
  