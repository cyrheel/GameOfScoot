import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameName: "",
  nbOfPlayer: 2,
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
  },
});

export const { handleName, handleNbOfPlayers } = ruleSlice.actions;

export const selectName = (state) => state.rules.gameName;
export const selectNbOfPlayers = (state) => state.rules.nbOfPlayer;

export default ruleSlice.reducer;
