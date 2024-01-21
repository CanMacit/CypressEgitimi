require('cypress-xpath')
import { secret } from './Secret'

describe('Login attempt', () => {
  it('Login', () => {
    cy.visit('/')

    //Access the element via get and write the rem address
    cy.xpath("//input[@placeholder='Kep adresi']").click().type("can.macit@turkkep.hs03.kep.tr")

    //wait a second
    cy.wait(1000)

    //Access the element via get and write the rem password
    cy.xpath("//input[@placeholder='Şifre']").click().type(atob(secret))

    //wait a second
    cy.wait(1000)

    cy.xpath("//button[text()='Giriş yap']").click()
  })
})