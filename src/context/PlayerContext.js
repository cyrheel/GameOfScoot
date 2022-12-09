import { createContext } from "react";

export const initialState = {
  players: [
    {
      name: "Player 1",
      position: 1,
      letter: "",
      redo: false,
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
      stats: {
        nbDef: 0,
        nbFailedDef: 0,
        nbCopied: 0,
        nbFailedTry: 0,
        nbLetterGiven: 0,
      },
    },
  ],
  funcs: {
    setName: (name) => {},
    setPosition: (position) => {},
    setletters: (letters) => {},
    setRedo: (redo) => {},
    setStats: (stats) => {},
    setPlayers: (players) => {},
  },
};

export default createContext(initialState);
