/* eslint-disable no-undef */

describe("Classic Game", () => {
  let players;
  beforeEach(() => {
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
        // eslint-disable-next-line no-loop-func
        cy.get("body").then(($body) => {
          if ($body.find("#endGame").length === 0) {
            if (Math.random() < 0.5) {
              cy.get("#YES").click();
            } else {
              cy.get("#NO").click();
            }
          } else {
            return true;
          }
        });
      }
    });
  });
  describe("Fuzzy Classic Game 10 Players", () => {
    it("should not be fucked up on random clicks (200)", () => {
      cy.get("#goback").click();
      for (let i = 0; i < 8; i++) {
        cy.get("#addPlayer").click();
      }
      cy.get("#playrn").click();
      for (let i = 0; i < 200; i++) {
        // eslint-disable-next-line no-loop-func
        cy.get("body").then(($body) => {
          if ($body.find("#endGame").length === 0) {
            if (Math.random() < 0.5) {
              cy.get("#YES").click();
            } else {
              cy.get("#NO").click();
            }
          } else {
            return true;
          }
        });
      }
    });
  });
});
