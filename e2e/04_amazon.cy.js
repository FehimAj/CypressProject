describe('Amazon Extended Tests', () => {

    beforeEach(() => {
      cy.visit('https://www.amazon.com/')
    })
  
    it('should navigate to the Amazon Fashion page', () => {
      cy.get('#nav-hamburger-menu').click()
      cy.get('.hmenu-visible a[data-menu-id="5"]').click()
      cy.contains('a', 'Amazon Fashion').click()
      cy.url().should('include', 'amazon.com/fashion')
    })
  
    it('should navigate to the Amazon Pantry page', () => {
      cy.get('#nav-hamburger-menu').click()
      cy.get('.hmenu-visible a[data-menu-id="11"]').click()
      cy.contains('a', 'Pantry').click()
      cy.url().should('include', 'amazon.com/pantry')
    })
  
    it('should navigate to the AmazonSmile page', () => {
      cy.scrollTo('bottom')
      cy.get('a[href*="smile.amazon"]').first().click()
      cy.url().should('include', 'smile.amazon')
    })
  
    it('should navigate to the Amazon Photos page', () => {
      cy.scrollTo('bottom')
      cy.get('a[href*="amazonphotos"]').first().click()
      cy.url().should('include', 'amazonphotos')
    })
  
    it('should navigate to the Amazon Renewed page', () => {
      cy.get('#nav-hamburger-menu').click()
      cy.get('.hmenu-visible a[data-menu-id="2"]').click()
      cy.contains('a', 'Amazon Renewed').click()
      cy.url().should('include', 'amazon.com/renewed')
    })
  
    it('should navigate to the Amazon Gift Finder page', () => {
      cy.scrollTo('bottom')
      cy.get('a[href*="giftfinder"]').first().click()
      cy.url().should('include', 'giftfinder')
    })
  
    it('should navigate to the Amazon Subscribe & Save page', () => {
      cy.get('#nav-hamburger-menu').click()
      cy.get('.hmenu-visible a[data-menu-id="9"]').click()
      cy.contains('a', 'Subscribe & Save').click()
      cy.url().should('include', 'subscribe')
    })
  
    it('should navigate to the Amazon Registry page', () => {
      cy.get('#nav-hamburger-menu').click()
      cy.get('.hmenu-visible a[data-menu-id="4"]').click()
      cy.contains('a', 'Registry').click()
      cy.url().should('include', 'registry')
    })
  
    it('should navigate to the Amazon Credit Cards page', () => {
      cy.scrollTo('bottom')
      cy.get('a[href*="creditcard"]').first().click()
      cy.url().should('include', 'creditcard')
    })
  
    it('should navigate to the Amazon Currency Converter page', () => {
      cy.scrollTo('bottom')
      cy.get('a[href*="currencyconverter"]').first().click()
      cy.url().should('include', 'currencyconverter')
    })
  })