/// <reference types="cypress" />

import { BedruckteAufkleberPO } from "../../page-object/bedruckteAufkleber"

const po = new BedruckteAufkleberPO()

Given(`Öffne Seite Aufkleber drucken lassen`, () => {
  po.seiteBesuchen()

  cy.get('.agree-button').click()

})


Then(`Dann steht {string} im Titel`, (title) => {
  cy.title().should('include', title)
})

Then(`Testet Defaults`, () => {
  // TODO: Die Abfrage der einzelnen Elemente sollte in PO übernommen werden
  cy.get('.colors-option__OptionContainer-zzjlkq-2.hsueyq').children('div:nth-child(1)').should('have.class','gKCquz')
  cy.get('.format-option__LabelContainer-sc-1u4rkyt-1.Rsaup').contains('38.1 x 21.2 mm').should('exist')
  cy.get('.paper-option-dropdown__MaterialWrapper-pjcsi9-7.iNlFsP').contains('Weißes Papier').should('exist')
  cy.get('.fmjVdI').contains('Matt').should('exist')
  cy.get('.Prices__QuantityContainer-c1dxe1-0.bLBfFA').contains('80 Etiketten2 Bogen').should('exist')
  cy.get('.Prices__TotalPriceContainer-c1dxe1-3.iOuEvk').contains('11,90 €').should('exist')
})