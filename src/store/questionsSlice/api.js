import { questionsActions } from ".";

export const getQuestionsData = (cb) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        process.env.REACT_APP_GET_QUESTIONS_ENDPOINT
      );
      if (!response.ok || response.status !== 200) {
        throw new Error("Failed to deg questions data");
      }
      const data = await response.json();
      return data;
    };
    try {
      const data = await fetchData();
      dispatch(questionsActions.setQuestions(data.results));
      if (cb) {
        cb();
      }
    } catch (err) {}
  };
};
