import chai from "chai";

import manageTry from "../src/Algos/manageTry.js";
import { initialPlayers } from "../src/Context/PlayerContext.js";

const { expect: expector } = chai;
const players2 = initialPlayers.players;

describe("manageTry()", () => {
  it("should do nothing if action is def", () => {
    const currResponse = true;
    const game = {
      currentAction: "def",
      currentPlayerId: 0,
    };

    const result = manageTry(game, players2, currResponse);
    expector(result).to.deep.equal(players2);
  });

  it("should reset try when player respond yes", () => {
    const currResponse = true;
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
    const result = manageTry(game, players, currResponse);
    expector(result).to.deep.equal(expected);
  });

  it("should reset try when player respond no and have no more try", () => {
    const currResponse = false;
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
    const result = manageTry(game, players, currResponse);
    expector(result).to.deep.equal(expected);
  });

  it("should increment try when player respond no", () => {
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

    const expected = [
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

    const result = manageTry(game, players, currResponse);
    expector(result).to.deep.equal(expected);
  });
});
