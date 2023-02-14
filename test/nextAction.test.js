import chai from "chai";

import getNextAction from "../src/Algos/getNextAction.js";
import { playersMulti } from "./mocks/players.js";
import { initialPlayers } from "../src/Context/PlayerContext.js";

const { expect: expector } = chai;
const players2 = initialPlayers.players;

describe("getNextAction()", () => {
  describe("Two Players", () => {
    it("currAction = def, res = false", () => {
      const currResponse = false;
      const game = {
        currentAction: "def",
      };
      const result = getNextAction(players2, game, currResponse);
      expector(result).to.equal("def");
    });

    it("currAction = def, res = true", () => {
      const currResponse = true;
      const game = {
        currentAction: "def",
      };
      const result = getNextAction(players2, game, currResponse);
      expector(result).to.equal("copy");
    });

    it("currAction = copy, lastToPlay, still have try", () => {
      const currResponse = true;
      const game = {
        currentAction: "copy",
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
      ];
      const result = getNextAction(players, game, currResponse);
      expector(result).to.equal("copy");
    });

    it("currAction = copy, lastToPlay, no more try", () => {
      const currResponse = true;
      const game = {
        currentAction: "copy",
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
          try: 2,
          stats: {
            nbDef: 0,
            nbFailedDef: 0,
            nbCopied: 0,
            nbFailedTry: 0,
            nbLetterGiven: 0,
          },
        },
      ];
      const result = getNextAction(players, game, currResponse);
      expector(result).to.equal("def");
    });

    it("currAction = copy, not lastToPlay, still have try", () => {
      const currResponse = false;
      const game = {
        currentAction: "copy",
        currentPlayerId: 0,
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
      const result = getNextAction(players, game, currResponse);
      expector(result).to.equal("copy");
    });

    it("currAction = copy, not lastToPlay, no more try", () => {
      const currResponse = false;
      const game = {
        currentAction: "copy",
        currentPlayerId: 1,
        nbOfTry: 3,
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
          try: 3,
          stats: {
            nbDef: 0,
            nbFailedDef: 0,
            nbCopied: 0,
            nbFailedTry: 0,
            nbLetterGiven: 0,
          },
        },
      ];
      const result = getNextAction(players, game, currResponse);
      expector(result).to.equal("def");
    });
  });

  describe("Multiples Players", () => {
    it("currAction = def, res = false", () => {
      const currResponse = false;
      const game = {
        currentAction: "def",
      };
      const result = getNextAction(playersMulti, game, currResponse);
      expector(result).to.equal("def");
    });

    it("currAction = def, res = true", () => {
      const currResponse = true;
      const game = {
        currentAction: "def",
      };
      const result = getNextAction(playersMulti, game, currResponse);
      expector(result).to.equal("copy");
    });

    it("currAction = copy, res = true, not lastToPlay, still have try", () => {
      const currResponse = true;
      const game = {
        currentAction: "copy",
        currentPlayerId: 0,
        nbOfTry: 2,
      };
      const result = getNextAction(players2, game, currResponse);
      expector(result).to.equal("copy");
    });

    it("currAction = copy, res = true, not lastToPlay, no more try", () => {
      const currResponse = true;
      const game = {
        currentAction: "copy",
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
          try: 2,
          stats: {
            nbDef: 0,
            nbFailedDef: 0,
            nbCopied: 0,
            nbFailedTry: 0,
            nbLetterGiven: 0,
          },
        },
      ];
      const result = getNextAction(players, game, currResponse);
      expector(result).to.equal("copy");
    });

    it("currAction = copy, res = true, lastToPlay, still have try", () => {
      const currResponse = true;
      const game = {
        currentAction: "copy",
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
          try: 1,
          stats: {
            nbDef: 0,
            nbFailedDef: 0,
            nbCopied: 0,
            nbFailedTry: 0,
            nbLetterGiven: 0,
          },
        },
      ];
      const result = getNextAction(players, game, currResponse);
      expector(result).to.equal("def");
    });

    it("currAction = copy, res = true, lastToPlay, no more try", () => {
      const currResponse = true;
      const game = {
        currentAction: "copy",
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
          try: 2,
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
      ];
      const result = getNextAction(players, game, currResponse);
      expector(result).to.equal("def");
    });

    it("currAction = copy, res = false, not lastToPlay, still have try", () => {
      const currResponse = false;
      const game = {
        currentAction: "copy",
        currentPlayerId: 1,
      };
      const players = [
        {
          id: 0,
          name: "Player 1",
          position: 1,
          letter: "",
          redo: false,
          isActive: true,
          try: 2,
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
      const result = getNextAction(players, game, currResponse);
      expector(result).to.equal("copy");
    });

    it("currAction = copy, res = false, not lastToPlay, no more have try", () => {
      const currResponse = false;
      const game = {
        currentAction: "copy",
        currentPlayerId: 1,
      };
      const result = getNextAction(players2, game, currResponse);
      expector(result).to.equal("copy");
    });

    it("currAction = copy, res = false, lastToPlay, still have try", () => {
      const currResponse = false;
      const game = {
        currentAction: "copy",
        currentPlayerId: 0,
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
      const result = getNextAction(players, game, currResponse);
      expector(result).to.equal("copy");
    });

    it("currAction = copy, res = false, lastToPlay, no more try", () => {
      const currResponse = false;
      const game = {
        currentAction: "copy",
        currentPlayerId: 1,
        nbOfTry: 3,
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
          try: 3,
          stats: {
            nbDef: 0,
            nbFailedDef: 0,
            nbCopied: 0,
            nbFailedTry: 0,
            nbLetterGiven: 0,
          },
        },
      ];
      const result = getNextAction(players, game, currResponse);
      expector(result).to.equal("def");
    });
  });
});
