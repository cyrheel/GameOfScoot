import { createContext } from "react";

export const initialGame = {
  game: {
    isRunning: false,
    targetWord: "OUT",
    isHard: false,
    allowRedo: false,
  },
  setGame: (game) => {},
};

export default createContext(initialGame);
