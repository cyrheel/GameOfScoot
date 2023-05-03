import { createContext } from "react";

export const initialPreferences = {
  preferences: {
    language: "en",
  },
  setPreferences: (preference) => {},
};

export default createContext(initialPreferences);
