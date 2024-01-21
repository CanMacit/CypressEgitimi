require('cypress-xpath')
import methods from '../pages/Methods'
import product from '../fixtures/productDetail'

describe('Search-Select-Add-Control', () => {

  it('Process', () => {

    methods.visit("https://demo.vercel.store")
    methods.fillInput("//input[@placeholder='Search for products...']","Acme Circles T-Shirt{enter}",100)
    methods.clickButton("//img[@alt='Acme Circles T-Shirt']",1000)
    methods.clickButton("//button[@title='Color Black']",1000)
    methods.clickButton("//button[@title='Size L']",1000)
    methods.clickButton("//button[@aria-label='Add to cart']",1000)
    // methods.clickButton("//a[text()='Proceed to Checkout']",1000)
    methods.shouldHaveText(product.addedProductText,"Acme Circles T-Shirt")
    methods.shouldHaveText(product.addedProductType,"Black / L")
  })

})