import { createContext } from "react";

export const initialGame = {
  game: {
    lap: 0,
    questionType: "impo",
    currentplayer: {},
  },
  setGame: (game) => {},
};

export default createContext(initialGame);
