/// <reference types="cypress"/>
/// http://on.cypress.io/intellisense

describe("Workshop tests",() =>{
  it("should load localhost",()=>{
    cy.visit("");
  })
  it("should find the banner and assert its content",()=>{
    cy.get('.banner > .container > .logo-font').contains("conduit")
  })
  it("should find second tab and assert its style",()=>{
    cy.get('.feed-toggle > .nav > :nth-child(2) > .nav-link').should('have.css','color','rgb(92, 184, 92)')
  })
  it("should capture the styling class of the navbar",()=>{
    cy.get(".navbar").should("have.class", "navbar-light");
  })
  it('should find a subtitle string without element selection',()=>{
    cy.contains('A place to share your Angular knowledge.')
  })
})
