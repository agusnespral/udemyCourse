/// <reference types="Cypress" />

describe('click on Contact Us', () => {
        it('', () => {
            cy.visit("https://www.automationteststore.com/")
            cy.get(".info_links_footer").contains("Contact Us").click();
            cy.get(".info_links_footer").contains("Contact Us").invoke("text").then((text) => {

                console.log(text);
            })
        
    });
});

// change