/* eslint-disable no-undef */

describe("Classic Game", () => {
  let players;
  before(() => {
    cy.exec("npm start");
    cy.fixture("example").then((data) => {
      players = data.players;
    });
    cy.visit("http://127.0.0.1:3000/game");
    cy.get("#restartgame").click();
  });
  describe("Fuzzy Classic Game 2 Players", () => {
    it("should not be fucked up on random clicks (50)", () => {
      for (let i = 0; i < 50; i++) {
        if (Math.random() < 0.5) {
          cy.get("#YES").click();
        } else {
          cy.get("#NO").click();
        }
      }
    });
  });
});
