import getDefiner from "../src/Algos/getDefiner.js";
import chai from "chai";
const { expect: expector } = chai;

describe("getDefiner()", () => {
  it("should return null if response is false", () => {
    const currResponse = false;
    const game = {
      currentPlayerId: 0,
      currentAction: "def",
    };
    const result = getDefiner(game, currResponse);
    expector(result).to.equal(null);
  });
  it("should return null if currentAction is not def", () => {
    const currResponse = true;
    const game = {
      currentPlayerId: 0,
      currentAction: "copy",
    };
    const result = getDefiner(game, currResponse);
    expector(result).to.equal(null);
  });
  it("should return currentPlayerId if response is true and currAction is def", () => {
    const currResponse = true;
    const game = {
      currentPlayerId: 13,
      currentAction: "def",
    };
    const result = getDefiner(game, currResponse);
    expector(result).to.equal(game.currentPlayerId);
  });
});
