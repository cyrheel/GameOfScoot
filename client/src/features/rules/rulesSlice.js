import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameName: "",
  nbOfPlayer: 2,
  isHard: false,
  allowRedo: false,
  NbOfTry: 1,
  targetWord: "SCOOT",
  letters: ["S", "C", "O", "O", "T"],
};

export const ruleSlice = createSlice({
  name: "rules",
  initialState,
  reducers: {
    handleName: (state, action) => {
      state.gameName = action.payload;
    },
    handleNbOfPlayers: (state, action) => {
      state.nbOfPlayer = action.payload;
    },
    handleIsHard: (state, action) => {
      state.isHard = action.payload;
    },
    handleAllowRedo: (state, action) => {
      state.allowRedo = action.payload;
    },
    handleNbOfTry: (state, action) => {
      state.NbOfTry = action.payload;
    },
    handleTargetWord: (state, action) => {
      state.targetWord = action.payload;
    },
    handleLetters: (state, action) => {
      state.letters = Array.from(action.payload);
    },
  },
});

export const {
  handleName,
  handleNbOfPlayers,
  handleIsHard,
  handleAllowRedo,
  handleNbOfTry,
  handleTargetWord,
  handleLetters,
} = ruleSlice.actions;

export const selectRules = (state) => state.rules;
export const selectName = (state) => state.rules.gameName;
export const selectNbOfPlayers = (state) => state.rules.nbOfPlayer;
export const selectIsHard = (state) => state.rules.isHard;
export const selectAllowRedo = (state) => state.rules.allowRedo;
export const selectNbOfTry = (state) => state.rules.NbOfTry;
export const selectTargetWord = (state) => state.rules.targetWord;
export const selectLetters = (state) => state.rules.letters;

export default ruleSlice.reducer;
