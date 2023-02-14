import chai from "chai";

import manageStatus from "../src/Algos/manageStatus.js";
import { initialPlayers } from "../src/Context/PlayerContext.js";

const { expect: expector } = chai;
const players2 = initialPlayers.players;

describe("manageStatus()", () => {
  it("should do nothing if action is def but definer doesn't exist", () => {
    const definer = null;
    const game = {
      currentAction: "def",
      currentPlayerId: 1,
    };

    const result = manageStatus(players2, game, definer);
    expector(result).to.equal(players2);
  });

  it("should set status to definer when action is def and there is a definer", () => {
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
    const result = manageStatus(players2, game, definer);
    expector(result).to.deep.equal(expected);
  });

  it("should set status to currentPlayer when currAction is copy but have no more try", () => {
    const definer = null;
    const game = {
      currentAction: "copy",
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

    const expected = [
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
    const result = manageStatus(players, game, definer);
    expector(result).to.deep.equal(expected);
  });

  it("should not set status to currentPlayer when currAction is copy but still have try", () => {
    const definer = null;
    const game = {
      currentAction: "copy",
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

    const expected = [
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
    const result = manageStatus(players, game, definer);
    expector(result).to.deep.equal(expected);
  });

  it("should reset all status when there is no one active other than currPlayer", () => {
    const definer = null;
    const game = {
      currentAction: "copy",
      currentPlayerId: 3,
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

    const expected = [
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
    const result = manageStatus(players, game, definer);
    expector(result).to.deep.equal(expected);
  });
});
