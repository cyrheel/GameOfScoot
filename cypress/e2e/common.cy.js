/* eslint-disable no-undef */

before(() => {
  cy.exec("npm start");
});

describe("Common", () => {
  describe("Home Page Navigation", () => {
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
  describe("Choose Game Page Navigation", () => {
    beforeEach(() => {
      cy.visit("http://127.0.0.1:3000/play");
    });
    it("should go back when '<-' button is clicked", () => {
      cy.get("#goback").click();
      cy.url().should("include", "/");
    });
    it("should go to '/set-game' when 'classic mode' button is clicked", () => {
      cy.get("#classicmode").click();
      cy.url().should("include", "/set-game");
    });
    it("should go to '/set-game' when 'custom mode' button is clicked", () => {
      cy.get("#custommode").click();
      cy.url().should("include", "/set-game");
    });
  });
  describe("Set Game Page Navigation", () => {
    beforeEach(() => {
      cy.visit("http://127.0.0.1:3000/set-game");
    });
    it("should go back when '<-' button is clicked", () => {
      cy.get("#goback").click();
      cy.url().should("include", "/play");
    });
    it("should go to '/game' when 'Play Right Now' button is clicked", () => {
      cy.get("#playrn").click();
      cy.url().should("include", "/game");
    });
  });
});
