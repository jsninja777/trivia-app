import { renderComponent } from "../../testsUtils";
import GameCard from ".";
import store from "../../store";
import { questionsActions } from "../../store/questionsSlice";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("renders GameCard", () => {
  const results = [
    {
      category: "History",
      type: "boolean",
      difficulty: "hard",
      question: "Japan was part of the Allied Powers during World War I.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "History",
      type: "boolean",
      difficulty: "hard",
      question: "Japan was part of the Allied Powers during World War I.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "History",
      type: "boolean",
      difficulty: "hard",
      question: "Japan was part of the Allied Powers during World War I.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "History",
      type: "boolean",
      difficulty: "hard",
      question: "Japan was part of the Allied Powers during World War I.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "History",
      type: "boolean",
      difficulty: "hard",
      question: "Japan was part of the Allied Powers during World War I.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "History",
      type: "boolean",
      difficulty: "hard",
      question: "Japan was part of the Allied Powers during World War I.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "History",
      type: "boolean",
      difficulty: "hard",
      question: "Japan was part of the Allied Powers during World War I.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "History",
      type: "boolean",
      difficulty: "hard",
      question: "Japan was part of the Allied Powers during World War I.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "History",
      type: "boolean",
      difficulty: "hard",
      question: "Japan was part of the Allied Powers during World War I.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "History",
      type: "boolean",
      difficulty: "hard",
      question: "Japan was part of the Allied Powers during World War I.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
  ];
  store.dispatch(questionsActions.setQuestions(results));
  const saveAnswer = jest.fn();
  const { container } = renderComponent(
    <GameCard questionIndex={3} saveAnswer={saveAnswer} />
  );
  expect(screen.getByText(/4 of 10/i)).toBeInTheDocument();
  const trueBtn = container.querySelector(
    'section[class^="GameCard__card"] > div > button:first-child'
  );
  const falseBtn = container.querySelector(
    'section[class^="GameCard__card"] > div > button:last-child'
  );
  expect(trueBtn.innerHTML).toBe("True");
  expect(falseBtn.innerHTML).toBe("False");
  userEvent.click(trueBtn);
  userEvent.click(falseBtn);
  expect(saveAnswer).toHaveBeenCalledTimes(2);
});
