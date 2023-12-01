describe("poner una test order", () => {

  describe("poner una test order", () => {

    it("poner una order", () => {
      cy.visit("https://storefront.release.getsauce.com/order/sf-rest/menu");
  
      // Alias para los elementos que coinciden con el selector
      cy.get("li.border-b-1.border-gray300.pb-300").as("elementos");
  
      // Utilizar un bucle do-while para asegurarse de que se selecciona un elemento sin modifiers
      cy.get("@elementos").its("length").then((cantidadDeElementos) => {
        let tieneModifiers;
  
        do {
          // Generar un índice aleatorio dentro del rango de la longitud
          const indiceAleatorio = Math.floor(Math.random() * cantidadDeElementos);
  
          // Hacer clic en el elemento aleatorio
          cy.get("@elementos").eq(indiceAleatorio).click();
  
          // Esperar a que el popup se abra
          cy.wait(3000);
  
          // Verificar si el contenido del popup tiene o no la clase específica
          cy.get("[id^='headlessui-dialog-panel-']").then(($popup) => {
            tieneModifiers = $popup.find('.flex.justify-between.items-center.flex-row.flex-nowrap.mb-100').length > 0;
          });
  
        } while (tieneModifiers);
  
        // Si llega aquí, significa que se encontró un elemento sin modifiers
        // Puedes continuar con los pasos siguientes
        cy.log("Se seleccionó un elemento sin modifiers. Puedes continuar con los pasos siguientes.");
        cy.contains("Add to cart").click();
        cy.contains("View cart").click();
        cy.contains("Checkout").click();
      });
    });
  
  });
  
});
