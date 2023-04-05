import { createContext } from "react";

export const initialGame = {
  game: {
    isRunning: false,
    lap: 0,
    targetWord: "SCOOT",
    isHard: false,
    allowRedo: false,
  },
  setGame: (game) => {},
};

export default createContext(initialGame);
