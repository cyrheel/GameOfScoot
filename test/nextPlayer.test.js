import chai from "chai";

import getNextPlayer from "../src/Algos/getNextPlayer.js";

const { expect: expector } = chai;

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
      };
      const result = getNextPlayer(nextAction, game, definer);
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
      };
      const result = getNextPlayer(nextAction, game, definer, 2);
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
      };
      const result = getNextPlayer(nextAction, game, definer, 2);
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
      };
      const result = getNextPlayer(nextAction, game, definer, 2);
      expector(result).to.equal(0);
    });
  });

  describe("Multiple Players", () => {
    it("should increment defIdx when nextAction is def", () => {
      const definer = null;
      const nextAction = "def";
      const game = {
        defIdx: 4,
        copyIdx: 0,
        currentAction: "def",
        currentDefinerId: null,
      };
      const result = getNextPlayer(nextAction, game, definer);
      expector(result).to.equal(5);
    });

    it("should reset defIdx when nextAction is def and last player is reach", () => {
      const definer = null;
      const nextAction = "def";
      const game = {
        defIdx: 6,
        copyIdx: 0,
        currentAction: "def",
        currentDefinerId: 2,
      };
      const result = getNextPlayer(nextAction, game, definer, 7);
      expector(result).to.equal(0);
    });

    it("should select first player when definer is in middle of the list", () => {
      const definer = 1;
      const nextAction = "copy";
      const game = {
        defIdx: 1,
        copyIdx: 0,
        currentAction: "def",
        currentDefinerId: null,
      };
      const result = getNextPlayer(nextAction, game, definer, 6);
      expector(result).to.equal(0);
    });

    it("should increment copyIdx when nextAction is copy and not lastToPlay", () => {
      const definer = null;
      const nextAction = "copy";
      const game = {
        defIdx: 0,
        copyIdx: 4,
        currentAction: "copy",
        currentDefinerId: 2,
      };
      const result = getNextPlayer(nextAction, game, definer, 6);
      expector(result).to.equal(5);
    });

    it("should double increment copyIdx when nextAction is copy and not lastToPlay but next is definer", () => {
      const definer = null;
      const nextAction = "copy";
      const game = {
        defIdx: 0,
        copyIdx: 3,
        currentAction: "copy",
        currentDefinerId: 4,
      };
      const result = getNextPlayer(nextAction, game, definer, 6);
      expector(result).to.equal(5);
    });

    it("should reset copyIdx when nextAction is copy but lastToPlay", () => {
      const definer = 2;
      const nextAction = "copy";
      const game = {
        defIdx: 0,
        copyIdx: 5,
        currentAction: "def",
        currentDefinerId: 4,
      };
      const result = getNextPlayer(nextAction, game, definer, 6);
      expector(result).to.equal(0);
    });
  });
});
