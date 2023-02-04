import chai from "chai";

import manageLetters from "../src/Algos/manageLetters.js";
import { players2 } from "./mocks/players.js";
import { classicRules } from "./mocks/classicRules.js";

const { expect: expector } = chai;

describe("manageLetters()", () => {
  describe("Two Players", () => {
    it("should not set letters if action is def", () => {
      const currResponse = false;
      const game = {
        currentAction: "def",
        currentPlayerId: 1,
      };

      const result = manageLetters(players2, game, classicRules, currResponse);
      expector(result).to.equal(players2);
    });

    it("should not set letters if action is copy and res is true", () => {
      const currResponse = true;
      const game = {
        currentAction: "def",
        currentPlayerId: 1,
      };

      const result = manageLetters(players2, game, classicRules, currResponse);
      expector(result).to.equal(players2);
    });

    it("should set letters to currentPlayer if action is copy and res is false", () => {
      const currResponse = false;
      const game = {
        currentAction: "copy",
        currentPlayerId: 1,
      };

      const expected = [
        {
          id: 0,
          name: "Player 1",
          position: 1,
          letter: "",
          redo: false,
          isActive: true,
          stats: {
            nbDef: 0,
            nbFailedDef: 0,
            nbCopied: 0,
            nbFailedTry: 0,
            nbLetterGiven: 0,
          },
        },
        {
          id: 1,
          name: "Player 2",
          position: 2,
          letter: "S",
          redo: false,
          isActive: true,
          stats: {
            nbDef: 0,
            nbFailedDef: 0,
            nbCopied: 0,
            nbFailedTry: 0,
            nbLetterGiven: 0,
          },
        },
      ];
      const result = manageLetters(players2, game, classicRules, currResponse);
      expector(result).to.deep.equal(expected);
    });
  });
});
