import { createSlice } from "@reduxjs/toolkit";

const initialStatePlayer = {
  playerName: "player1",
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

const initialStatePlayers = [];

export const playerSlice = createSlice({
  name: "player",
  initialStatePlayer,
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
  },
});

export const playerSSlice = createSlice({
  name: "playerS",
  initialStatePlayers,
  reducers: {
    handleNewPlayer: (state, action) => {
      state.playerS += action.payload;
    },
  },
});

export const {
  handleName,
  handlePosition,
  handleLetter,
  handleRedo,
  handleStats,
} = playerSlice.actions;

export const { handleNewPlayer } = playerSSlice.actions;

export const selectPlayer = (state) => state.player;
export const selectPlayerName = (state) => state.player.playerName;
export const selectPosition = (state) => state.player.position;
export const selectLetters = (state) => state.player.letter;
export const selectRedo = (state) => state.player.redo;
export const selectStats = (state) => state.player.stats;

export const selectPlayerS = (state) => state.playerS;

export const playerReducer = playerSlice.reducer;
export const playerSReducer = playerSSlice.reducer;
