import chai from "chai";

import getDefiner from "../src/Algos/getDefiner.js";

const { expect: expector } = chai;

describe("getDefiner()", () => {
  it("should return currentPlayerId if response is true and currAction is def", () => {
    const currResponse = true;
    const game = {
      currentPlayerId: 13,
      currentAction: "def",
    };
    const result = getDefiner(game, currResponse);
    expector(result).to.equal(13);
  });
  it("should return null if response is false and action def", () => {
    const currResponse = false;
    const game = {
      currentPlayerId: 0,
      currentAction: "def",
    };
    const result = getDefiner(game, currResponse);
    expector(result).to.equal(null);
  });
  it("should return null if response true and action copy", () => {
    const currResponse = true;
    const game = {
      currentPlayerId: 0,
      currentAction: "copy",
    };
    const result = getDefiner(game, currResponse);
    expector(result).to.equal(null);
  });
  it("should return null if response false and action copy", () => {
    const currResponse = false;
    const game = {
      currentPlayerId: 0,
      currentAction: "copy",
    };
    const result = getDefiner(game, currResponse);
    expector(result).to.equal(null);
  });
});
