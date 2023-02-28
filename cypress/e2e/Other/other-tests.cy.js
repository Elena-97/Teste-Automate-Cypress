describe("exemplu unde", () =>{

    //test verificare segment URL
    it("verific dacă un Url contine /stiri/", () => {
        cy.visit("https://www.digi24.ro/stiri/economie/germania-vrea-sa-vanda-masini-cu-motoare-pe-combustie-si-dupa-2035-2266635");

        cy.url().should("include", "/stiri/") 


    })
})