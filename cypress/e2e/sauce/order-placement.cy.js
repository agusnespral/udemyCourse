describe('order placement on stage', () => {
    it('order placement e2e', () => {

        cy.visit("https://www.leobranch.getsauce.com/order-online/");
        
        cy.get("[class='NqoqfG I1DmK8']").eq(0).click({ force: true });
        cy.wait(3000);
        cy.get("[class='NqoqfG I1DmK8']").eq(0).click({ force: true });
        cy.wait(10000);
        
        
        //cy.get('[data-layer="Content"]').click()
        
    });
});

