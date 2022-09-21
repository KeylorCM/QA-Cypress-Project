/// <references types="Cypress" />


describe('Test for the Shopping cart', ()=>{

   beforeEach(() => {
       cy.visit('https://www.rever.com')
   })

   it('Functionality Shopping cart', () => {


     
      cy.get('.mobile-pages-title > a > .nav-link-text')
      cy.get('.whb-mobile-left')
      cy.get('.whb-mobile-left > .wd-tools-element > a > .wd-tools-icon').screenshot()
      cy.get('.whb-mobile-left > .wd-tools-element > a > .wd-tools-icon').click()
      
    
      cy.get('#menu-item-7165 > .woodmart-nav-link').click()
      cy.get('.post-7421 > .product-wrapper > .product-element-top > .wrapp-buttons > .wd-buttons > .wd-add-btn > .button').click()
      cy.get('.post-7342 > .product-wrapper > .product-element-top > .wrapp-buttons > .wd-buttons > .wd-add-btn > .button').click()
     
      cy.get('.whb-mobile-right > .wd-header-cart > a > .wd-tools-icon').click()
      cy.get('.shopping-cart-widget-body > .wd-scroll-content')
      cy.get('.woocommerce-mini-cart__total').should('be.visible')

      cy.visit('https://www.rever.com/cart/')
     
 
   });


} )

