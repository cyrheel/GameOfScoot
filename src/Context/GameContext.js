import { createContext } from "react";

// Possible actions: "def", "copy", "redo"

export const initialGame = {
  game: {
    isRunning: false,
    isHard: false,
    allowRedo: false,
    nbOfTry: 2,
    targetWord: "SCOOT",
    lap: 0,
    defIdx: 0,
    copyIdx: 0,
    currentDefinerId: null,
    currentPlayerId: null,
    currentAction: "def",
  },
  setGame: (game) => {},
};

export default createContext(initialGame);
