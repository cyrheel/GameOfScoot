import { createContext } from "react";

export const initialRules = {
  rules: {
    gameName: "Game of Scoot",
    nbOfPlayers: 3,
    isHard: false,
    allowRedo: false,
    nbOfTry: 2,
    targetWord: "SCOOT",
    letters: ["S", "C", "O", "O", "T"],
  },
  customRules: {},
  setRules: (rules) => {},
  setCustomRules: (rules) => {},
};

export default createContext(initialRules);
