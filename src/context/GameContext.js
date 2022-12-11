import { createContext } from "react";

// Possible actions: "def", "copy", "redo"

export const initialGame = {
  game: {
    lap: 0,
    isRunning: false,
    totalPlayer: 2,
    currentPlayerId: null,
    currentPlayer: null,
    currentAction: "def",
  },
  setGame: (game) => {},
};

export default createContext(initialGame);
