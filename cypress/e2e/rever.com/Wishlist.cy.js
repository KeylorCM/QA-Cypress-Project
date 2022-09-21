/// <references types="Cypress" />


describe('Test for the Wishlist', ()=>{

    beforeEach(() => {
        cy.visit('https://www.rever.com')
    })

    it('Functionality Wishlist', () => {

        cy.get('.whb-mobile-left').should('be.visible')
        cy.get('.whb-mobile-left > .wd-tools-element > a > .wd-tools-icon').click()
        cy.get('#menu-item-7165 > .woodmart-nav-link').click()
        cy.scrollTo(0, 500)

        cy.get('.post-7368 > .product-wrapper > .product-element-top > .wrapp-buttons > .wd-buttons > .wd-wishlist-btn > a').click()
        cy.get('.post-7649 > .product-wrapper > .product-element-top > .wrapp-buttons > .wd-buttons > .wd-wishlist-btn > a').click()
        cy.get('.post-7405 > .product-wrapper > .product-element-top > .wrapp-buttons > .wd-buttons > .wd-wishlist-btn > a').click()
        cy.get('.post-7798 > .product-wrapper > .product-element-top > .wrapp-buttons > .wd-buttons > .wd-wishlist-btn > a').click()

        cy.wait(3500)

        cy.get('.whb-mobile-left').should('be.visible')
        cy.get('.whb-mobile-left > .wd-tools-element > a > .wd-tools-icon').click()
        cy.get('.menu-item-wishlist > .woodmart-nav-link').click()
      
    });


} )
