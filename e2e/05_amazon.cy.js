describe('Amazon Footer Tests', () => {

    beforeEach(() => {
      cy.visit('https://www.amazon.com/')
      cy.scrollTo('bottom')
    })
  
    it('should display the footer', () => {
      cy.get('footer').should('be.visible')
    })
  
    it('should have working links in the "Get to Know Us" section', () => {
      const links = [
        { selector: 'a[href*="about.amazon.com"]', urlPart: 'about.amazon.com' },
        { selector: 'a[href*="https://www.amazon.jobs"]', urlPart: 'amazon.jobs' },
        { selector: 'a[href*="https://press.aboutamazon.com"]', urlPart: 'press.aboutamazon.com' },
        { selector: 'a[href*="https://www.amazon.com/ir"]', urlPart: 'amazon.com/ir' },
        { selector: 'a[href*="https://www.amazon.com/Amazon-Devices"]', urlPart: 'Amazon-Devices' }
      ]
  
      links.forEach(link => {
        cy.get(link.selector).first().should('have.attr', 'href').and('include', link.urlPart)
      })
    })
  
    it('should have working links in the "Make Money with Us" section', () => {
      const links = [
        { selector: 'a[href*="https://affiliate-program.amazon.com"]', urlPart: 'affiliate-program.amazon.com' },
        { selector: 'a[href*="https://advertising.amazon.com"]', urlPart: 'advertising.amazon.com' },
        { selector: 'a[href*="https://www.amazon.com/sell"]', urlPart: 'amazon.com/sell' },
        { selector: 'a[href*="https://www.amazon.com/services"]', urlPart: 'amazon.com/services' }
      ]
  
      links.forEach(link => {
        cy.get(link.selector).first().should('have.attr', 'href').and('include', link.urlPart)
      })
    })
  
    it('should have working links in the "Amazon Payment Products" section', () => {
      const links = [
        { selector: 'a[href*="https://www.amazon.com/gp/product/B00LFY01SK"]', urlPart: 'product/B00LFY01SK' },
        { selector: 'a[href*="https://www.amazon.com/creditcard"]', urlPart: 'creditcard' },
        { selector: 'a[href*="https://www.amazon.com/gp/cobrandcard/marketing.html"]', urlPart: 'cobrandcard/marketing.html' },
        { selector: 'a[href*="https://www.amazon.com/storecard"]', urlPart: 'storecard' }
      ]
  
      links.forEach(link => {
        cy.get(link.selector).first().should('have.attr', 'href').and('include', link.urlPart)
      })
    })
  
    it('should have working links in the "Let Us Help You" section', () => {
      const links = [
        { selector: 'a[href*="https://www.amazon.com/gp/help/customer/display.html"]', urlPart: 'customer/display.html' },
        { selector: 'a[href*="https://www.amazon.com/gp/help/customer/display.html?nodeId=468520"]', urlPart: 'nodeId=468520' },
        { selector: 'a[href*="https://www.amazon.com/gp/help/customer/contact-us"]', urlPart: 'customer/contact-us' },
        { selector: 'a[href*="https://www.amazon.com/gp/help/customer/display.html?nodeId=201966830"]', urlPart: 'nodeId=201966830' }
      ]
  
      links.forEach(link => {
        cy.get(link.selector).first().should('have.attr', 'href').and('include', link.urlPart)
      })
    })
  })