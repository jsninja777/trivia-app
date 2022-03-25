import { renderComponent } from "../../testsUtils";
import Results from ".";
import store from "../../store";
import { questionsActions } from "../../store/questionsSlice";

test("renders Results component", () => {
  const results = new Array(10);
  const answers = new Array(10);
  store.dispatch(questionsActions.setQuestions(results));
  store.dispatch(questionsActions.setAnswers(answers));
  renderComponent(<Results />);
  expect(!!store.getState().questionsReducer.questions).toBeTruthy();
  expect(!!store.getState().questionsReducer.answers).toBeTruthy();
});
