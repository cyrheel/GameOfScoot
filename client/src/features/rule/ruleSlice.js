import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameName: "",
  nbOfPlayer: 2,
  isHard: false,
  allowRedo: false,
  nbOfTry: 1,
  targetWord: "SCOOT",
  letters: ["S", "C", "O", "O", "T"],
};

export const ruleSlice = createSlice({
  name: "rule",
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

export const selectRule = (state) => state.rule;
export const selectName = (state) => state.rule.gameName;
export const selectNbOfPlayers = (state) => state.rule.nbOfPlayer;
export const selectIsHard = (state) => state.rule.isHard;
export const selectAllowRedo = (state) => state.rule.allowRedo;
export const selectNbOfTry = (state) => state.rule.NbOfTry;
export const selectTargetWord = (state) => state.rule.targetWord;
export const selectLetters = (state) => state.rule.letters;

export default ruleSlice.reducer;
