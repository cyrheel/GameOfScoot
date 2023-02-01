import chai from "chai";

import getNextAction from "../src/Algos/getNextAction.js";
import { players2, playersMulti } from "./mocks/players.js";

const { expect: expector } = chai;

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

    it("currAction = copy, res = false, not lastToPlay", () => {
      const currResponse = false;
      const game = {
        currentAction: "copy",
        copyIdx: 1,
      };
      const result = getNextAction(players2, game, currResponse);
      expector(result).to.equal("copy");
    });

    it("currAction = copy, res = false, lastToPlay", () => {
      const currResponse = false;
      const game = {
        currentAction: "copy",
        copyIdx: 2,
      };
      const result = getNextAction(players2, game, currResponse);
      expector(result).to.equal("def");
    });

    it("currAction = copy, res = true, not lastToPlay", () => {
      const currResponse = true;
      const game = {
        currentAction: "copy",
        copyIdx: 0,
      };
      const result = getNextAction(players2, game, currResponse);
      expector(result).to.equal("def");
    });

    it("currAction = copy, res = true, lastToPlay", () => {
      const currResponse = true;
      const game = {
        currentAction: "copy",
        copyIdx: 2,
      };
      const result = getNextAction(players2, game, currResponse);
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

    it("currAction = copy, res = false, not lastToPlay", () => {
      const currResponse = false;
      const game = {
        currentAction: "copy",
        copyIdx: 2,
      };
      const result = getNextAction(playersMulti, game, currResponse);
      expector(result).to.equal("copy");
    });

    it("currAction = copy, res = false, lastToPlay", () => {
      const currResponse = false;
      const game = {
        currentAction: "copy",
        copyIdx: 3,
      };
      const result = getNextAction(playersMulti, game, currResponse);
      expector(result).to.equal("def");
    });

    it("currAction = copy, res = true, not lastToPlay", () => {
      const currResponse = true;
      const game = {
        currentAction: "copy",
        copyIdx: 0,
      };
      const result = getNextAction(playersMulti, game, currResponse);
      expector(result).to.equal("def");
    });

    it("currAction = copy, res = true, lastToPlay", () => {
      const currResponse = true;
      const game = {
        currentAction: "copy",
        copyIdx: 3,
      };
      const result = getNextAction(playersMulti, game, currResponse);
      expector(result).to.equal("def");
    });
  });
});
