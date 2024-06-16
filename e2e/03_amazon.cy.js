describe('Amazon Further Tests', () => {

    beforeEach(() => {
      cy.visit('https://www.amazon.com/')
    })
  
    it('should navigate to the Amazon Launchpad page', () => {
      cy.get('#nav-hamburger-menu').click()
      cy.get('.hmenu-visible a[data-menu-id="2"]').click()
      cy.contains('a', 'Amazon Launchpad').click()
      cy.url().should('include', 'amazon.com/launchpad')
    })
  
    it('should navigate to the Amazon Warehouse Deals page', () => {
      cy.get('#nav-hamburger-menu').click()
      cy.get('.hmenu-visible a[data-menu-id="2"]').click()
      cy.contains('a', 'Amazon Warehouse Deals').click()
      cy.url().should('include', 'amazon.com/warehouse-deals')
    })
  
    it('should navigate to the AmazonBasics page', () => {
      cy.get('#nav-hamburger-menu').click()
      cy.get('.hmenu-visible a[data-menu-id="2"]').click()
      cy.contains('a', 'AmazonBasics').click()
      cy.url().should('include', 'amazon.com/amazonbasics')
    })
  
    it('should navigate to the Amazon Elements page', () => {
      cy.get('#nav-hamburger-menu').click()
      cy.get('.hmenu-visible a[data-menu-id="2"]').click()
      cy.contains('a', 'Amazon Elements').click()
      cy.url().should('include', 'amazon.com/amazonelements')
    })
  
    it('should navigate to the Amazon Fire TV page', () => {
      cy.get('#nav-hamburger-menu').click()
      cy.get('.hmenu-visible a[data-menu-id="2"]').click()
      cy.contains('a', 'Fire TV').click()
      cy.url().should('include', 'amazon.com/firetv')
    })
  
    it('should navigate to the Amazon Echo & Alexa page', () => {
      cy.get('#nav-hamburger-menu').click()
      cy.get('.hmenu-visible a[data-menu-id="2"]').click()
      cy.contains('a', 'Echo & Alexa').click()
      cy.url().should('include', 'amazon.com/echo')
    })
  
    it('should navigate to the Amazon Kindle E-readers & Books page', () => {
      cy.get('#nav-hamburger-menu').click()
      cy.get('.hmenu-visible a[data-menu-id="2"]').click()
      cy.contains('a', 'Kindle E-readers & Books').click()
      cy.url().should('include', 'amazon.com/kindle')
    })
  
    it('should navigate to the Amazon Home Services page', () => {
      cy.get('#nav-hamburger-menu').click()
      cy.get('.hmenu-visible a[data-menu-id="2"]').click()
      cy.contains('a', 'Home Services').click()
      cy.url().should('include', 'amazon.com/services')
    })
  
    it('should navigate to the Amazon Business page', () => {
      cy.get('#nav-hamburger-menu').click()
      cy.get('.hmenu-visible a[data-menu-id="2"]').click()
      cy.contains('a', 'Amazon Business').click()
      cy.url().should('include', 'amazon.com/business')
    })
  
    it('should navigate to the Amazon Audible page', () => {
      cy.get('#nav-hamburger-menu').click()
      cy.get('.hmenu-visible a[data-menu-id="2"]').click()
      cy.contains('a', 'Audible').click()
      cy.url().should('include', 'audible.com')
    })
  })