require('cypress-xpath')
import methods from '../pages/Methods'

describe('Includes dashboard page test scenarios', () => {
  // it('Verify Dashboard Page', () => {

  //   methods.visit("https://demo.vercel.store")
  //   cy.contains('All')
  //   cy.contains('Stickers')
  //   cy.contains('Shirts')

  // })

  it('Redirect to all category', () => {

    methods.visit("https://demo.vercel.store")
    methods.clickButton("//a[text()='All']",3000)
  })

  it('Redirect to stickers category', () => {

    methods.visit("https://demo.vercel.store")
    methods.clickButton("//a[text()='Stickers']",3000)
  })

  it('Redirect to shirts category', () => {

    methods.visit("https://demo.vercel.store")
    methods.clickButton("//a[text()='Shirts']",3000)
  })

  it('Search Product', () => {

    methods.visit("https://demo.vercel.store")
    methods.fillInput("//input[@placeholder='Search for products...']","Acme Circle T-Shirt",400)
  })
})