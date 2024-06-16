describe('Amazon Search and Filter Tests', () => {
    beforeEach(() => {
      cy.visit('https://www.amazon.com/');
    });
  
    it('should search for a product and filter results', () => {
      cy.get('#twotabsearchtextbox').type('smartphone{enter}');
      cy.url().should('include', 'k=smartphone');
      cy.get('.s-main-slot .s-result-item').should('have.length.greaterThan', 0);
  
      cy.get('[aria-label="4 Stars & Up"]').click();
      cy.get('.s-main-slot .s-result-item').each(($item) => {
        cy.wrap($item).find('.a-icon-star-small').should('have.length.greaterThan', 3);
      });
    });
  
    it('should sort search results by price', () => {
      cy.get('#twotabsearchtextbox').type('camera{enter}');
      cy.url().should('include', 'k=camera');
      cy.get('#a-autoid-0-announce').click(); 
      cy.get('[aria-label="Price: High to Low"]').click();
      cy.get('.s-main-slot .s-result-item').each(($item, index, $list) => {
        if (index < $list.length - 1) {
          const currentPrice = parseFloat($item.find('.a-price .a-offscreen').text().replace('$', '').replace(',', ''));
          const nextPrice = parseFloat($list.eq(index + 1).find('.a-price .a-offscreen').text().replace('$', '').replace(',', ''));
          expect(currentPrice).to.be.at.least(nextPrice);
        }
      });
    });
  
  });
  