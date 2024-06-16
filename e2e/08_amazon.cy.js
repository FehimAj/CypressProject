describe('Amazon Header Navigation Tests', () => {
    beforeEach(() => {
      cy.visit('https://www.amazon.com/');
    });
  
    it('should display the Amazon logo', () => {
      cy.get('#nav-logo-sprites').should('be.visible');
    });
  
    it('should navigate to various sections from header links', () => {
      cy.get('#nav-link-accountList').click();
      cy.url().should('include', 'nav_ya_signin');
  
      cy.visit('https://www.amazon.com/');
      cy.get('#nav-hamburger-menu').click();
      cy.get('.hmenu-visible a[data-menu-id="1"]').click();
      cy.url().should('include', 'nav_shopall');
    });
  
    it('should display search bar and perform search', () => {
      cy.get('#twotabsearchtextbox').should('be.visible')
        .type('laptop{enter}');
      cy.url().should('include', 'k=laptop');
      cy.get('.s-main-slot').should('be.visible');
    });
  
    it('should navigate to Cart page', () => {
      cy.get('#nav-cart').click();
      cy.url().should('include', '/cart');
      cy.get('.sc-list-item-content').should('be.visible');
    });
  
  });
  