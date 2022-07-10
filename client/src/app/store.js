import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import ruleReducer from "../features/rule/ruleSlice";
import playerReducer from "../features/player/playerSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    rule: ruleReducer,
    player: playerReducer,
  },
});
