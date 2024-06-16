describe('Amazon Product Details Page Tests', () => {
    it('should display product details correctly', () => {
      cy.visit('https://www.amazon.com/dp/B07K1MRRXB');
      cy.get('#productTitle').should('be.visible');
      cy.get('#priceblock_ourprice').should('be.visible');
      
      cy.get('#productDescription').scrollIntoView().should('be.visible');
      cy.get('#averageCustomerReviews').should('be.visible');
    });
  
    it('should add product to cart from product details page', () => {
      cy.visit('https://www.amazon.com/dp/B07K1MRRXB');
      cy.get('#add-to-cart-button').click();
      cy.get('#nav-cart-count').should('contain', '1');
    });
  
    it('should add product to wishlist from product details page', () => {
      cy.visit('https://www.amazon.com/dp/B07K1MRRXB');
      cy.get('#add-to-wishlist-button-submit').click();
      cy.get('#WLHUC_viewlist').should('be.visible');
    });
  
    it('should view product images on product details page', () => {
      cy.visit('https://www.amazon.com/dp/B07K1MRRXB');
      cy.get('.imgTagWrapper').should('have.length.greaterThan', 1);
    });
  
  });
  