export class BedruckteAufkleberPO {

    seiteBesuchen()
    {
        // TODO: domain/baseUrl in zentrale konfig übernehmen
        const url = 'https://www.avery-zweckform.com/aufkleber/aufkleber-drucken-lassen'
        cy.visit(url)
    }
}