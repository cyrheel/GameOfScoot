/* eslint-disable no-undef */

before(() => {
  cy.exec("npm start");
});

describe("Common", () => {
  describe("Navigation", () => {
    beforeEach(() => {
      cy.visit("http://127.0.0.1:3000");
    });
    it("should go to '/play' when 'play' button is clicked", () => {
      cy.get("#play").click();
      cy.url().should("include", "/play");
    });
    it("should go to '/didacticiel' when 'didacticiel' button is clicked", () => {
      cy.get("#didact").click();
      cy.url().should("include", "/didacticiel");
    });
  });
});

// after(() => {
//   cy.exec("");
// });
