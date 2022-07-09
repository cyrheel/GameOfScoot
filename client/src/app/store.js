import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import rulesReducer from "../features/rules/rulesSlice";
import { playerReducer, playerSReducer } from "../features/players/playerSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    rules: rulesReducer,
    player: playerReducer,
    playerS: playerSReducer,
  },
});
