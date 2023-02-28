describe('Site Google.com', () => {

    //testul nr 1
    // it("finctionează cu o căutare basic", () => {
    //   cy.visit("https://google.com");
    //   cy.get("#L2AGLb").click();
    //   cy.get(".gLFyf").type("vlog de it").type("{enter}");

    //   cy.get("#result-stats").should("exist");
    // })

    it("selectez folosind un atribut" , () => {
      cy.visit("https://google.com");

      cy.get("#L2AGLb").click();

      cy.get('[alt="Google"]').should('be.visible');


    })

// Test screenshot
    it("screenshot la pagină", () => {
      cy.visit("https://google.com");

      cy.screenshot();

    })

//Test constanta și verificare conținut input
    it('verific o valaore din input', () => {
      cy.visit("https://google.com");
      
      cy.get("#L2AGLb").click();
      const googleSearch= cy.get(".gLFyf"); //constanta

      googleSearch.type('123');
      googleSearch.should('have.value', '123'); //assertion  conține textul

    })

})