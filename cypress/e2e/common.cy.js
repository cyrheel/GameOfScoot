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
      cy.url().should("include", "/choose-game");
    });
  });
  describe("Choose Game Page Navigation", () => {
    beforeEach(() => {
      cy.visit("http://127.0.0.1:3000/choose-game");
    });
    it("should go back when '<-' button is clicked", () => {
      cy.get("#goback").click();
      cy.url().should("include", "/");
    });
    it("should go to '/set-quick-game' when 'classic mode' button is clicked", () => {
      cy.get("#classicmode").click();
      cy.url().should("include", "/set-quick-game");
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
      cy.url().should("include", "/choose-game");
    });
    it("should go to '/game' when 'Play Right Now' button is clicked", () => {
      cy.get("#playrn").click();
      cy.url().should("include", "/game");
    });
  });
  describe("Set Quick Game Page Navigation", () => {
    beforeEach(() => {
      cy.visit("http://127.0.0.1:3000/set-quick-game");
    });
    it("should go back when '<-' button is clicked", () => {
      cy.get("#goback").click();
      cy.url().should("include", "/choose-game");
    });
    it("should go to '/game' when 'Play Right Now' button is clicked", () => {
      cy.get("#playrn").click();
      cy.url().should("include", "/game");
    });
  });
});
