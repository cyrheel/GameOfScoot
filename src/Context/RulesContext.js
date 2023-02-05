import { createContext } from "react";

export const initialRules = {
  rules: {
    gameName: "Game of Scoot",
    isHard: false,
    allowRedo: false,
    nbOfTry: 2,
    targetWord: "SCOOT",
  },
  customRules: {},
  setRules: (rules) => {},
  setCustomRules: (rules) => {},
};

export default createContext(initialRules);
