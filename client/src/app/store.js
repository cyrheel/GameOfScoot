import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import ruleReducer from "../features/rule/ruleSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    rule: ruleReducer,
  },
});
