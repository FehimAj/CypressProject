describe('Amazon Site Tests', () => {

    beforeEach(() => {
      cy.visit('https://www.amazon.com/')
    })
  
    it('should load the homepage correctly', () => {
      cy.get('#nav-logo-sprites').should('be.visible')
    })
  
    it('should search for a product and display results', () => {
      cy.get('#twotabsearchtextbox').type('laptop{enter}')
      cy.url().should('include', 'k=laptop')
      cy.get('.s-main-slot').should('be.visible')
    })
  
    it('should open a product page correctly', () => {
      cy.get('#twotabsearchtextbox').type('laptop{enter}')
      cy.get('.s-main-slot .s-result-item').first().find('a').click()
      cy.url().should('include', '/dp/')
      cy.get('#productTitle').should('be.visible')
    })
  
    it('should add a product to the cart', () => {
      cy.get('#twotabsearchtextbox').type('laptop{enter}')
      cy.get('.s-main-slot .s-result-item').first().find('a').click()
      cy.get('#add-to-cart-button').click()
      cy.get('#nav-cart-count').should('contain', '1')
    })
  
    it('should display the cart page with the added product', () => {
      cy.get('#twotabsearchtextbox').type('laptop{enter}')
      cy.get('.s-main-slot .s-result-item').first().find('a').click()
      cy.get('#add-to-cart-button').click()
      cy.get('#nav-cart').click()
      cy.get('.sc-list-item-content').should('be.visible')
    })
  
    it('should have working navigation bar links', () => {
      cy.get('#nav-link-accountList').click()
      cy.url().should('include', 'nav_ya_signin')
    })
  
    it('should have working footer links', () => {
      cy.scrollTo('bottom')
      cy.get('footer a[href*="/gp/help/customer"]').first().click()
      cy.url().should('include', 'gp/help/customer')
    })
  
    it('should navigate through categories correctly', () => {
      cy.get('#nav-hamburger-menu').click()
      cy.get('.hmenu-visible a[data-menu-id="1"]').click()
      cy.url().should('include', 'nav_shopall')
    })
  
    it('should have a visible image carousel on the homepage', () => {
      cy.get('.a-carousel').should('be.visible')
    })
  
    it('should display the deal of the day section', () => {
      cy.get('a[href*="/goldbox"]').click()
      cy.url().should('include', 'goldbox')
      cy.get('.DealContent-module__truncate_sWbxETx42ZPStTc9jwySW').should('be.visible')
    })
  })