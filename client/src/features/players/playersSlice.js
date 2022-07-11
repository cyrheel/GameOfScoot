import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    addPlayer: (state, action) => {
      state.push(action.payload);
    },
    removePlayer: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addPlayer, removePlayer } = playersSlice.actions;

export const selectPlayers = (state) => state.players;

export default playersSlice.reducer;
