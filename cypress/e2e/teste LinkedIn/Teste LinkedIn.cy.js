describe("Suita", () => {

it("Login succed", () => {
cy.visit("http://linkedIn.com");

cy.get('.nav__button-secondary').click();
cy.get('#username').type("elena_logofatu97@yahoo.com");
cy.get('#password').type("hufenncu");
cy.get('.btn__primary--large').click();

cy.get('#ember15').should("exist");

})
})