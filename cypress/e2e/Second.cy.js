require('cypress-xpath')

describe('Login attempt', () => {
  it('passes', () => {
    cy.visit('https://autopilot.mynak.net/auth/login')

    cy.wait(2000)

    cy.xpath("//input[@placeholder='Enter e-mail']").click().type("admin@example.com")

    cy.wait(2000)

    cy.xpath("//input[@placeholder='Enter password']").click().type("secret")

    cy.wait(2000)

    cy.xpath("//button[text()='Login']").click()

    cy.xpath("//span[text()='Super Admin']").should('have.text','Super Admin')
  })


  it('URL control', () => {
    cy.visit('https://demo.vercel.store/')

    cy.xpath("//a[@href='/search/stickers']").click()

    cy.url().should('eq','https://demo.vercel.store/search/stickers') //href control

    cy.location().should((location)=>{
      expect(location.href).to.equal('https://demo.vercel.store/search/stickers') //href control
      expect(location.pathname).to.equal('/search/stickers') //pathname control
      expect(location.protocol).to.equal('https:')
    })
  })
})