/// <reference types="Cypress" />

describe("Test Contact-us form via WebdriverUni", ()=> {
    
    it.only('Should be able to submit a succesfull submission via contact us form', ()=> {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
        //cy.get('#contact-us').click();
        cy.get('[name="first_name"]').type("Agus");
        cy.get('[name="last_name"]').type("Nes");
        cy.get('[name="email"]').type("agusnes@gmail.com");
        cy.get('textarea.feedback-input').type("test comment");
        cy.document().should("have.property", "charset").and("eq", "UTF-8") //abre el html y se fija que tenga esa propiedad con ese valor
        cy.title().should("include", "WebDriver") //se fija que el titulo de la pagina contenga esa palabra
        cy.url().should("include", "contactus") // chequea q en la url este esa palabra
        
        cy.get('[type="submit"]').click();

        cy.get('h1').should("have.text", "Thank You for your Message!");
    })

    it('Should not be able to submit a succesfull submission via contact us form as all fields are required', ()=> {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type("Agus");
        cy.get('[name="last_name"]').type("Nes");
        cy.get('[name="email"]').type("agusnes@gmail.com");
        //cy.get('textarea.feedback-input').type("test comment");
        cy.get('[type="submit"]').click();
            
    })
    
})  