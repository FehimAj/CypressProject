describe('Amazon Account Management Tests', () => {
    it('should update account information', () => {
      cy.visit('https://www.amazon.com/');
      cy.get('#nav-link-accountList').click();
      cy.contains('Your Account').click();
      cy.contains('Edit your account info').click();
      cy.get('#ap_customer_name').clear().type('Updated Name');
      cy.get('#auth-cnep-edit-name-button').click();
      cy.contains('Account settings have been saved').should('be.visible');
    });
  
    it('should view order history', () => {
      cy.visit('https://www.amazon.com/');
      cy.get('#nav-link-accountList').click();
      cy.contains('Your Orders').click();
      cy.get('.a-box-inner').should('be.visible');
    });
  
    it('should manage addresses in address book', () => {
      cy.visit('https://www.amazon.com/');
      cy.get('#nav-link-accountList').click();
      cy.contains('Your Addresses').click();
      cy.get('.ya-card--address-block').should('have.length.greaterThan', 0);
    });
  
    
  });
  