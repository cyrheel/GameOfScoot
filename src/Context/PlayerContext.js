import { createContext } from "react";

export const initialPlayers = {
  players: [
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
  ],
  setPlayers: (players) => {},
};

export default createContext(initialPlayers);
