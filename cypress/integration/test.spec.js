/// <reference types="cypress"/>
/// http://on.cypress.io/intellisense

describe("Workshop tests",() =>{
  it("should load localhost",()=>{
    cy.visit("");
  })
  /*it("should find the banner and assert its content",()=>{
    cy.get('.banner > .container > .logo-font').contains("conduit")
  })*/
  it("should find second tab and assert its style",()=>{
    cy.get('.feed-toggle > .nav > :nth-child(2) > .nav-link').should('have.css','color','rgb(92, 184, 92)')
  })
  it("should capture the styling class of the navbar",()=>{
    cy.get(".navbar").should("have.class", "navbar-light");
  })
  it('should find a subtitle string without element selection',()=>{
    cy.contains('A place to share your Angular knowledge.')
  })
  //getBySel is a custom cy command created in the commands.js file, to get elements by a specific attribute created for testing (data-cy)
  it('should assert that the header contains conduit via custom command',()=>{
    cy.getBySel('banner-header').contains('conduit')
  })

  it('should reproduce the whole logged user path', ()=>{
    const articleTitle='Custom Cypress title'
    let version = 7;
    cy.get('.container > .nav > :nth-child(2) > .nav-link')
      .click()
    cy.url().should('equal','http://localhost:4200/login')
    cy.get('button').should('have.text', ' Sign in ')
    cy.get(':nth-child(2) > .form-control').type('ngconfentcypress@testemail.com')
    cy.get(':nth-child(3) > .form-control').type('ngConfEntCypress')
    cy.server();
    cy.route('POST','https://conduit.productionready.io/api/users/login').as('login')

    cy.get('button').should('not.be','disabled').click()
    cy.wait('@login').its('status').should('equal',200)
    cy.url().should('equal','http://localhost:4200/')
    cy.contains('New Article').click()
    cy.url().should('equal','http://localhost:4200/editor')
    cy.get(':nth-child(1) > .form-control').type(`${articleTitle} ${version}`)
    cy.get(':nth-child(2) > .form-control').type('This is filled by Cypress testing')
    cy.get(':nth-child(3) > .form-control').type('lorem ipsum')
    cy.get(':nth-child(4) > .form-control').type('testing,cypress,e2e')
    cy.get('button').should('not.be','disabled').click()
    cy.get('h1').should('have.text',`${articleTitle} ${version}`)
    version=version+1


  })
})
