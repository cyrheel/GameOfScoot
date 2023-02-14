import chai from "chai";

import manageLetters from "../src/Algos/manageLetters.js";
import { initialPlayers } from "../src/Context/PlayerContext.js";
import { classicRules } from "./mocks/classicRules.js";

const { expect: expector } = chai;
const players2 = initialPlayers.players;

describe("manageLetters()", () => {
  it("action = def, currRes = false", () => {
    const currResponse = false;
    const game = {
      ...classicRules,
      currentAction: "def",
      currentPlayerId: 1,
      nbOfTry: 2,
    };

    const result = manageLetters(players2, game, currResponse);
    expector(result).to.equal(players2);
  });

  it("action = def, currRes = true", () => {
    const currResponse = true;
    const game = {
      ...classicRules,
      currentAction: "def",
      currentPlayerId: 1,
      nbOfTry: 2,
    };

    const result = manageLetters(players2, game, currResponse);
    expector(result).to.equal(players2);
  });

  it("action = copy, currRes = true, lastTry, lastToPlay", () => {
    const currResponse = true;
    const game = {
      ...classicRules,
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

    const result = manageLetters(players, game, currResponse);
    expector(result).to.deep.equal(players);
  });

  it("action = copy, currRes = true, lastTry, not lastToPlay", () => {
    const currResponse = true;
    const game = {
      ...classicRules,
      currentAction: "copy",
      currentPlayerId: 0,
      nbOfTry: 3,
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
    ];

    const result = manageLetters(players, game, currResponse);
    expector(result).to.deep.equal(players);
  });

  it("action = copy, currRes = true, not lastTry, lastToPlay", () => {
    const currResponse = true;
    const game = {
      ...classicRules,
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
    ];

    const result = manageLetters(players, game, currResponse);
    expector(result).to.deep.equal(players);
  });

  it("action = copy, currRes = true, not lastTry, not lastToPlay", () => {
    const currResponse = true;
    const game = {
      ...classicRules,
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
    ];

    const result = manageLetters(players, game, currResponse);
    expector(result).to.deep.equal(players);
  });

  it("action = copy, currRes = false, lastTry, lastToPlay", () => {
    const currResponse = false;
    const game = {
      ...classicRules,
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
        letter: "S",
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
    const result = manageLetters(players, game, currResponse);
    expector(result).to.deep.equal(expected);
  });

  it("action = copy, currRes = false, lastTry, not lastToPlay", () => {
    const currResponse = false;
    const game = {
      ...classicRules,
      currentAction: "copy",
      currentPlayerId: 0,
      nbOfTry: 3,
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
    ];

    const exprected = [
      {
        id: 0,
        name: "Player 1",
        position: 1,
        letter: "S",
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
    ];
    const result = manageLetters(players, game, currResponse);
    expector(result).to.deep.equal(exprected);
  });

  it("action = copy, currRes = false, not lastTry, lastToPlay", () => {
    const currResponse = false;
    const game = {
      ...classicRules,
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
    ];

    const result = manageLetters(players, game, currResponse);
    expector(result).to.deep.equal(players);
  });

  it("action = copy, currRes = false, not lastTry, not lastToPlay", () => {
    const currResponse = false;
    const game = {
      ...classicRules,
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
    ];

    const result = manageLetters(players, game, currResponse);
    expector(result).to.deep.equal(players);
  });
});
