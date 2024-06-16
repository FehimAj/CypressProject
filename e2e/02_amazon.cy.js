describe('Amazon Additional Tests', () => {

    beforeEach(() => {
      cy.visit('https://www.amazon.com/')
    })
  
    it('should navigate to the Amazon Fresh page', () => {
      cy.get('#nav-hamburger-menu').click()
      cy.get('.hmenu-visible a[data-menu-id="11"]').click()
      cy.contains('a', 'Amazon Fresh').click()
      cy.url().should('include', 'amazon.com/fmc')
    })
  
    it('should navigate to the Alexa Skills page', () => {
      cy.get('#nav-hamburger-menu').click()
      cy.get('.hmenu-visible a[data-menu-id="2"]').click()
      cy.contains('a', 'Alexa Skills').click()
      cy.url().should('include', 'alexa-skills')
    })
  
    it('should navigate to the Amazon Music page', () => {
      cy.get('#nav-hamburger-menu').click()
      cy.get('.hmenu-visible a[data-menu-id="2"]').click()
      cy.contains('a', 'Amazon Music').click()
      cy.url().should('include', 'music.amazon.com')
    })
  
    it('should navigate to the Amazon Advertising page', () => {
      cy.scrollTo('bottom')
      cy.get('a[href*="advertising.amazon"]').first().click()
      cy.url().should('include', 'advertising.amazon')
    })
  
    it('should navigate to the Careers page', () => {
      cy.scrollTo('bottom')
      cy.get('a[href*="amazon.jobs"]').first().click()
      cy.url().should('include', 'amazon.jobs')
    })
  
    it('should navigate to the Amazon Devices page', () => {
      cy.get('#nav-hamburger-menu').click()
      cy.get('.hmenu-visible a[data-menu-id="2"]').click()
      cy.contains('a', 'Amazon Devices').click()
      cy.url().should('include', 'amazon.com/devices')
    })
  
    it('should navigate to the Blog page', () => {
      cy.scrollTo('bottom')
      cy.get('a[href*="blog.aboutamazon"]').first().click()
      cy.url().should('include', 'blog.aboutamazon')
    })
  
    it('should navigate to the Amazon Renewed page', () => {
      cy.get('#nav-hamburger-menu').click()
      cy.get('.hmenu-visible a[data-menu-id="2"]').click()
      cy.contains('a', 'Amazon Renewed').click()
      cy.url().should('include', 'amazon.com/renewed')
    })
  
    it('should navigate to the Books page', () => {
      cy.get('#nav-hamburger-menu').click()
      cy.get('.hmenu-visible a[data-menu-id="3"]').click()
      cy.contains('a', 'Books').click()
      cy.url().should('include', 'amazon.com/books')
    })
  
    it('should navigate to the Amazon Pantry page', () => {
      cy.get('#nav-hamburger-menu').click()
      cy.get('.hmenu-visible a[data-menu-id="11"]').click()
      cy.contains('a', 'Amazon Pantry').click()
      cy.url().should('include', 'amazon.com/pantry')
    })
  })