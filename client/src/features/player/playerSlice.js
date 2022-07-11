import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playerName: "",
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
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    handleName: (state, action) => {
      state.playerName = action.payload;
    },
    handlePosition: (state, action) => {
      state.position = action.payload;
    },
    handleLetter: (state, action) => {
      state.letter = action.payload;
    },
    handleRedo: (state, action) => {
      state.Redo = action.payload;
    },
    handleStats: (state, action) => {
      state.stats = action.payload;
    },
    resetPlayer: (state) => {
      state = initialState;
    },
  },
});

export const {
  handleName,
  handlePosition,
  handleLetter,
  handleRedo,
  handleStats,
  resetPlayer,
} = playerSlice.actions;

export const selectPlayer = (state) => state.player;
export const selectPlayerName = (state) => state.player.playerName;
export const selectPosition = (state) => state.player.position;
export const selectLetters = (state) => state.player.letter;
export const selectRedo = (state) => state.player.redo;
export const selectStats = (state) => state.player.stats;

export default playerSlice.reducer;
