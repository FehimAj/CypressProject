describe('Amazon Additional Tests', () => {

    beforeEach(() => {
      cy.visit('https://www.amazon.com/')
    })
  
    it('should load the Sign-In page correctly', () => {
      cy.get('#nav-link-accountList').click()
      cy.url().should('include', 'ap/signin')
      cy.get('h1').should('contain.text', 'Sign-In')
    })
  
    it('should navigate to the Prime Video page', () => {
      cy.get('#nav-hamburger-menu').click()
      cy.get('.hmenu-visible a[data-menu-id="2"]').click()
      cy.contains('a', 'Prime Video').click()
      cy.url().should('include', 'primevideo')
    })
  
    it('should navigate to the Today’s Deals page', () => {
      cy.get('a[href*="/gp/goldbox"]').click()
      cy.url().should('include', 'goldbox')
      cy.get('h1').should('contain.text', 'Today’s Deals')
    })
  
    it('should navigate to the Amazon Best Sellers page', () => {
      cy.get('a[href*="/gp/bestsellers"]').click()
      cy.url().should('include', 'bestsellers')
      cy.get('h1').should('contain.text', 'Amazon Best Sellers')
    })
  
    it('should navigate to the Customer Service page', () => {
      cy.scrollTo('bottom')
      cy.get('a[href*="/gp/help/customer"]').first().click()
      cy.url().should('include', 'gp/help/customer')
      cy.get('h1').should('contain.text', 'Customer Service')
    })
  
    it('should navigate to the Returns & Orders page', () => {
      cy.get('#nav-orders').click()
      cy.url().should('include', 'ap/signin')
      cy.get('h1').should('contain.text', 'Sign-In')
    })
  
    it('should navigate to the Gift Cards page', () => {
      cy.get('a[href*="/gift-cards"]').first().click()
      cy.url().should('include', 'gift-cards')
      cy.get('h1').should('contain.text', 'Gift Cards')
    })
  
    it('should navigate to the Registry page', () => {
      cy.get('a[href*="/gp/registry"]').first().click()
      cy.url().should('include', 'gp/registry')
      cy.get('h1').should('contain.text', 'Registry')
    })
  
    it('should navigate to the Amazon’s Mobile Apps page', () => {
      cy.scrollTo('bottom')
      cy.get('a[href*="gp/feature.html"]').contains('Amazon App').click()
      cy.url().should('include', 'gp/feature.html')
    })
  
    it('should switch language to Spanish', () => {
      cy.get('#icp-nav-flyout').click()
      cy.get('.icp-radio').contains('Español - ES').click()
      cy.get('input[type="submit"]').click()
      cy.get('#nav-link-accountList').should('contain.text', 'Cuenta y listas')
    })
  })