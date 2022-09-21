/// <references types="Cypress" />

describe('Test for the Main Menu Bar', ()=>{

    beforeEach(() => {
        cy.visit('https://www.rever.com')
    })

    it('Functionality Menu Options', () => {

        cy.get('.mobile-pages-title > a > .nav-link-text')


      cy.get('.whb-mobile-left').should('be.visible')
      cy.get('.whb-mobile-left > .wd-tools-element > a > .wd-tools-icon').click()
      cy.get('#menu-item-7162 > .woodmart-nav-link').click()

      cy.get('.whb-mobile-left').should('be.visible')
      cy.get('.whb-mobile-left > .wd-tools-element > a > .wd-tools-icon').click()
      cy.get('#menu-item-7165 > .woodmart-nav-link').click()

      cy.get('.whb-mobile-left').should('be.visible')
      cy.get('.whb-mobile-left > .wd-tools-element > a > .wd-tools-icon').click()
      cy.get('#menu-item-6943 > .woodmart-nav-link').click()

      cy.get('.whb-mobile-left').should('be.visible')
      cy.get('.whb-mobile-left > .wd-tools-element > a > .wd-tools-icon').click()
      cy.get('#menu-item-6944 > .woodmart-nav-link').click()


      cy.get('.whb-mobile-left').should('be.visible')
      cy.get('.whb-mobile-left > .wd-tools-element > a > .wd-tools-icon').click()
      cy.get('#menu-item-6951 > .woodmart-nav-link').click()


      cy.get('.whb-mobile-left').should('be.visible')
      cy.get('.whb-mobile-left > .wd-tools-element > a > .wd-tools-icon').click()
      cy.get('#menu-item-6952 > .woodmart-nav-link').click()


      cy.get('.whb-mobile-left').should('be.visible')
      cy.get('.whb-mobile-left > .wd-tools-element > a > .wd-tools-icon').click()
      cy.get('.menu-item-wishlist > .woodmart-nav-link').click()


      cy.scrollTo(0, 1200)
        
    });

} )