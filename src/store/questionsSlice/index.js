import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: null,
  answers: null,
};
const questionsSlice = createSlice({
  name: "quiestions",
  initialState: initialState,
  reducers: {
    setQuestions(state, action) {
      state.questions = action.payload;
    },
    setAnswers(state, action) {
      state.answers = action.payload;
    },
  },
});

export const questionsActions = questionsSlice.actions;
export default questionsSlice;
