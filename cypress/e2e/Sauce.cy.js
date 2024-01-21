require('cypress-xpath')
import methods from '../pages/Methods'
import product from '../fixtures/productDetail'
import sauceElements from '../fixtures/sauceItems'

describe('Purchase Process', () => {

  it('Process', () => {

    methods.visit("https://www.saucedemo.com/")

    //Login
    methods.fillInput(sauceElements.userNameInput,"standard_user",100)
    methods.fillInput(sauceElements.passwordInput,"secret_sauce",100)
    methods.clickButton(sauceElements.loginButton,1000)

    //Add to cart
    methods.clickButton(sauceElements.addToCartButton,1000)
    methods.clickButton(sauceElements.goToCartIconLink,1000)
    methods.clickButton(sauceElements.checkoutButton,1000)

    //Approvement Fill
    methods.fillInput(sauceElements.firstProductNameInput,"Can",100)
    methods.fillInput(sauceElements.lastProductNameInput,"Macit",100)
    methods.fillInput(sauceElements.postalCodeInput,"34410",100)
    methods.clickButton(sauceElements.continueButton,1000)

    //Check text
    methods.shouldHaveText(product.Hoodie,"Sauce Labs Fleece Jacket")
    methods.clickButton(sauceElements.finishButton,1000)
    methods.shouldHaveText(product.purchaseDoneText,"Thank you for your order!")
  })

})