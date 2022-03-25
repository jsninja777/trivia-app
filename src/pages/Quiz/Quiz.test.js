import { renderComponent } from "../../testsUtils";
import Quiz from ".";
import store from "../../store";
import { questionsActions } from "../../store/questionsSlice";

test("renders Quiz component", () => {
  const results = [{
    category: "History",
    type: "boolean",
    difficulty: "hard",
    question: "Japan was part of the Allied Powers during World War I.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },];
  store.dispatch(questionsActions.setQuestions(results));
  renderComponent(<Quiz />);
  expect(!!store.getState().questionsReducer.questions).toBeTruthy()
});
