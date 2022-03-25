import { configureStore } from "@reduxjs/toolkit";
import questionsSlice from "./questionsSlice/index";

const store = configureStore({
  reducer: {
    questionsReducer: questionsSlice.reducer,
  },
});
export default store;

