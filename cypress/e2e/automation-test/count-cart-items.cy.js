describe("", () => {
  it("Validate number of products", () => {
    cy.visit("https://www.automationteststore.com/");

    cy.get(".prdocutname").each(($el, index, $list) => {
        cy.wrap($el).invoke("attr", "title").then((titulo) => {
            cy.log(index + 1 + " - " + titulo)
        cy.wrap(index).as("largo")
        });

    cy.get("@largo").then((largo) => {
        let largoTotal = largo + 1
        cy.log("Cantidad de items = " + largoTotal)
    })
        
    });
  });
});
