import chai from "chai";

import getNextPlayer from "../src/Algos/getNextPlayer.js";
import { initialPlayers } from "../src/Context/PlayerContext.js";
import { playersMulti } from "./mocks/players.js";

const { expect: expector } = chai;
const player2 = initialPlayers.players;

describe("getNextPlayer()", () => {
  describe("Two Players", () => {
    it("should increment defIdx when nextAction is def", () => {
      const definer = null;
      const nextAction = "def";
      const game = {
        defIdx: 0,
        copyIdx: 0,
        currentAction: "def",
        currentDefinerId: null,
        nbOfTry: 2,
      };
      const result = getNextPlayer(nextAction, game, definer, player2);
      expector(result).to.equal(1);
    });

    it("should reset defIdx when nextAction is def and last player is reach", () => {
      const definer = null;
      const nextAction = "def";
      const game = {
        defIdx: 1,
        copyIdx: 0,
        currentAction: "def",
        currentDefinerId: 2,
        nbOfTry: 2,
      };
      const result = getNextPlayer(nextAction, game, definer, player2);
      expector(result).to.equal(0);
    });

    it("should not select the definer when nextAction is copy", () => {
      const definer = 0;
      const nextAction = "copy";
      const game = {
        defIdx: 0,
        copyIdx: 0,
        currentAction: "def",
        currentDefinerId: null,
        currentPlayerId: 0,
        nbOfTry: 2,
      };
      const players = [
        {
          id: 0,
          name: "Player 1",
          position: 1,
          letter: "",
          redo: false,
          isActive: true,
          try: 0,
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
          try: 0,
          stats: {
            nbDef: 0,
            nbFailedDef: 0,
            nbCopied: 0,
            nbFailedTry: 0,
            nbLetterGiven: 0,
          },
        },
      ];
      const result = getNextPlayer(nextAction, game, definer, players);
      expector(result).to.equal(1);
    });

    it("should not select the definer when nextAction is copy (2)", () => {
      const definer = 1;
      const nextAction = "copy";
      const game = {
        defIdx: 1,
        copyIdx: 0,
        currentAction: "def",
        currentDefinerId: null,
        currentPlayerId: 1,
        nbOfTry: 2,
      };
      const players = [
        {
          id: 0,
          name: "Player 1",
          position: 1,
          letter: "",
          redo: false,
          isActive: true,
          try: 0,
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
          try: 0,
          stats: {
            nbDef: 0,
            nbFailedDef: 0,
            nbCopied: 0,
            nbFailedTry: 0,
            nbLetterGiven: 0,
          },
        },
      ];
      const result = getNextPlayer(nextAction, game, definer, players);
      expector(result).to.equal(0);
    });

    it("should select the same player again if he still have try", () => {
      const definer = null;
      const nextAction = "copy";
      const game = {
        defIdx: 1,
        copyIdx: 0,
        currentAction: "copy",
        currentDefinerId: 1,
        currentPlayerId: 0,
        nbOfTry: 2,
      };
      const players = [
        {
          id: 0,
          name: "Player 1",
          position: 1,
          letter: "",
          redo: false,
          isActive: true,
          try: 0,
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
          try: 0,
          stats: {
            nbDef: 0,
            nbFailedDef: 0,
            nbCopied: 0,
            nbFailedTry: 0,
            nbLetterGiven: 0,
          },
        },
      ];
      const result = getNextPlayer(nextAction, game, definer, players);
      expector(result).to.equal(0);
    });
  });

  describe("Multiple Players", () => {
    it("should increment defIdx when nextAction is def", () => {
      const definer = null;
      const nextAction = "def";
      const game = {
        defIdx: 2,
        copyIdx: 0,
        currentAction: "def",
        currentDefinerId: null,
        nbOfTry: 2,
      };
      const result = getNextPlayer(nextAction, game, definer, playersMulti);
      expector(result).to.equal(3);
    });

    it("should reset defIdx when nextAction is def and last player is reach", () => {
      const definer = null;
      const nextAction = "def";
      const game = {
        defIdx: 3,
        copyIdx: 0,
        currentAction: "def",
        currentDefinerId: 3,
        nbOfTry: 2,
      };
      const players = [
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
      const result = getNextPlayer(nextAction, game, definer, players);
      expector(result).to.equal(0);
    });

    it("should select first player when definer is in middle of the list", () => {
      const definer = 2;
      const nextAction = "copy";
      const game = {
        defIdx: 2,
        copyIdx: 0,
        currentAction: "def",
        currentDefinerId: null,
        currentPlayerId: 2,
        nbOfTry: 2,
      };
      const players = [
        {
          id: 0,
          name: "Player 1",
          position: 1,
          letter: "",
          redo: false,
          isActive: true,
          try: 0,
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
          try: 0,
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
          try: 0,
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
          try: 0,
          stats: {
            nbDef: 0,
            nbFailedDef: 0,
            nbCopied: 0,
            nbFailedTry: 0,
            nbLetterGiven: 0,
          },
        },
      ];
      const result = getNextPlayer(nextAction, game, definer, players);
      expector(result).to.equal(0);
    });

    it("should select second player when definer is first of the list", () => {
      const definer = 0;
      const nextAction = "copy";
      const game = {
        defIdx: 0,
        copyIdx: 0,
        currentAction: "def",
        currentDefinerId: null,
        currentPlayerId: 0,
        nbOfTry: 2,
      };
      const players = [
        {
          id: 0,
          name: "Player 1",
          position: 1,
          letter: "",
          redo: false,
          isActive: true,
          try: 0,
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
          try: 0,
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
          try: 0,
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
          try: 0,
          stats: {
            nbDef: 0,
            nbFailedDef: 0,
            nbCopied: 0,
            nbFailedTry: 0,
            nbLetterGiven: 0,
          },
        },
      ];
      const result = getNextPlayer(nextAction, game, definer, players);
      expector(result).to.equal(1);
    });

    it("should increment copyIdx when nextAction is copy have no more try and not lastToPlay", () => {
      const definer = null;
      const nextAction = "copy";
      const game = {
        defIdx: 1,
        copyIdx: 2,
        currentAction: "copy",
        currentDefinerId: 1,
        currentPlayerId: 2,
        nbOfTry: 2,
      };
      const players = [
        {
          id: 0,
          name: "Player 1",
          position: 1,
          letter: "",
          redo: false,
          isActive: false,
          try: 0,
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
          try: 0,
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
          try: 1,
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
          try: 0,
          stats: {
            nbDef: 0,
            nbFailedDef: 0,
            nbCopied: 0,
            nbFailedTry: 0,
            nbLetterGiven: 0,
          },
        },
      ];
      const result = getNextPlayer(nextAction, game, definer, players);
      expector(result).to.equal(3);
    });

    it("should double increment copyIdx when nextAction is copy and not lastToPlay but next is definer", () => {
      const definer = null;
      const nextAction = "copy";
      const game = {
        defIdx: 0,
        copyIdx: 1,
        currentAction: "copy",
        currentDefinerId: 2,
        currentPlayerId: 1,
        nbOfTry: 2,
      };
      const players = [
        {
          id: 0,
          name: "Player 1",
          position: 1,
          letter: "",
          redo: false,
          isActive: false,
          try: 0,
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
          try: 0,
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
          try: 1,
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
          try: 0,
          stats: {
            nbDef: 0,
            nbFailedDef: 0,
            nbCopied: 0,
            nbFailedTry: 0,
            nbLetterGiven: 0,
          },
        },
      ];
      const result = getNextPlayer(nextAction, game, definer, players);
      expector(result).to.equal(3);
    });

    it("should reset copyIdx when nextAction is copy but lastToPlay", () => {
      const definer = null;
      const nextAction = "copy";
      const game = {
        defIdx: 0,
        copyIdx: 3,
        currentAction: "copy",
        currentDefinerId: 1,
        currentPlayerId: 3,
        nbOfTry: 2,
      };
      const players = [
        {
          id: 0,
          name: "Player 1",
          position: 1,
          letter: "",
          redo: false,
          isActive: false,
          try: 0,
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
          try: 0,
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
          try: 1,
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
          try: 0,
          stats: {
            nbDef: 0,
            nbFailedDef: 0,
            nbCopied: 0,
            nbFailedTry: 0,
            nbLetterGiven: 0,
          },
        },
      ];
      const result = getNextPlayer(nextAction, game, definer, players);
      expector(result).to.equal(0);
    });

    it("should select the same player again if he still have try even if its last to play", () => {
      const definer = null;
      const nextAction = "copy";
      const game = {
        defIdx: 1,
        copyIdx: 3,
        currentAction: "copy",
        currentDefinerId: 1,
        currentPlayerId: 3,
        nbOfTry: 2,
      };
      const players = [
        {
          id: 0,
          name: "Player 1",
          position: 1,
          letter: "",
          redo: false,
          isActive: false,
          try: 0,
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
          try: 0,
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
          try: 1,
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
          try: 0,
          stats: {
            nbDef: 0,
            nbFailedDef: 0,
            nbCopied: 0,
            nbFailedTry: 0,
            nbLetterGiven: 0,
          },
        },
      ];
      const result = getNextPlayer(nextAction, game, definer, players);
      expector(result).to.equal(3);
    });

    it("should increment copyIdx if player have no more try but not last to play", () => {
      const definer = null;
      const nextAction = "copy";
      const game = {
        defIdx: 3,
        copyIdx: 0,
        currentAction: "copy",
        currentDefinerId: 3,
        currentPlayerId: 0,
        nbOfTry: 2,
      };
      const players = [
        {
          id: 0,
          name: "Player 1",
          position: 1,
          letter: "",
          redo: false,
          isActive: true,
          try: 1,
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
          try: 0,
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
          try: 0,
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
          isActive: false,
          try: 0,
          stats: {
            nbDef: 0,
            nbFailedDef: 0,
            nbCopied: 0,
            nbFailedTry: 0,
            nbLetterGiven: 0,
          },
        },
      ];
      const result = getNextPlayer(nextAction, game, definer, players);
      expector(result).to.equal(1);
    });
  });
});
