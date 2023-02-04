import chai from "chai";

import manageStatus from "../src/Algos/manageStatus.js";
import { players2 } from "./mocks/players.js";
// import { classicRules } from "./mocks/classicRules.js";

const { expect: expector } = chai;

describe("manageStatus()", () => {
  describe("Two Players", () => {
    it("should do nothing if action is def", () => {
      const definer = null;
      const game = {
        currentAction: "def",
        currentPlayerId: 1,
      };

      const result = manageStatus(players2, game, definer);
      expector(result).to.equal(players2);
    });

    it("should set status to definer", () => {
      const definer = 0;
      const game = {
        currentAction: "def",
        currentPlayerId: 0,
      };

      const expected = [
        {
          id: 0,
          name: "Player 1",
          position: 1,
          letter: "",
          redo: false,
          isActive: false,
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
      ];
      const result = manageStatus(players2, game, definer);
      expector(result).to.deep.equal(expected);
    });

    it("should set status to currentPlayer when currAction is copy", () => {
      const definer = null;
      const game = {
        currentAction: "copy",
        currentPlayerId: 2,
      };
      const players = [
        {
          id: 0,
          name: "Player 1",
          position: 1,
          letter: "",
          redo: false,
          isActive: false,
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
          letter: "",
          redo: false,
          isActive: false,
          stats: {
            nbDef: 0,
            nbFailedDef: 0,
            nbCopied: 0,
            nbFailedTry: 0,
            nbLetterGiven: 0,
          },
        },
        {
          id: 2,
          name: "Player 3",
          position: 3,
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
          id: 3,
          name: "Player 4",
          position: 4,
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
      ];

      const expected = [
        {
          id: 0,
          name: "Player 1",
          position: 1,
          letter: "",
          redo: false,
          isActive: false,
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
          letter: "",
          redo: false,
          isActive: false,
          stats: {
            nbDef: 0,
            nbFailedDef: 0,
            nbCopied: 0,
            nbFailedTry: 0,
            nbLetterGiven: 0,
          },
        },
        {
          id: 2,
          name: "Player 3",
          position: 3,
          letter: "",
          redo: false,
          isActive: false,
          stats: {
            nbDef: 0,
            nbFailedDef: 0,
            nbCopied: 0,
            nbFailedTry: 0,
            nbLetterGiven: 0,
          },
        },
        {
          id: 3,
          name: "Player 4",
          position: 4,
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
      ];
      const result = manageStatus(players, game, definer);
      expector(result).to.deep.equal(expected);
    });
  });
});
