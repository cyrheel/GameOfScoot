import { createContext } from "react";

export const initialPlayers = {
  players: [
    {
      name: "Player 1",
      position: 1,
      letter: "",
      redo: false,
      isActive: true,
      stats: {
        nbDef: 0,
        nbFailedDef: 0,
        nbCopied: 0,
        nbFailedTry: 0,
        nbLetterGiven: 0,
      },
    },
    {
      name: "Player 2",
      position: 2,
      letter: "",
      redo: false,
      isActive: true,
      stats: {
        nbDef: 0,
        nbFailedDef: 0,
        nbCopied: 0,
        nbFailedTry: 0,
        nbLetterGiven: 0,
      },
    },
  ],
  setPlayers: (players) => {},
};

export default createContext(initialPlayers);
