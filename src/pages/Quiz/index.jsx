import { useState } from "react";
import classes from "./Quiz.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { questionsData } from "../../utils/getReducers";
import { questionsActions } from "../../store/questionsSlice";
import routes from "../../routes";
import GameCard from "../../components/GameCard";

const Quiz = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questions } = useSelector(questionsData);
  const [questionIndex, setQuiestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const saveAnswer = (e) => {
    const responseOption = e.target.innerHTML;
    const answerData = {
      isCorrectAnswer:
        responseOption === questions[questionIndex].correct_answer,
      questionText: questions[questionIndex].question,
    };
    if (questionIndex === 9) {
      dispatch(questionsActions.setAnswers(answers));
      navigate(routes.resultspage);
    }
    setAnswers((prevAnswers) => [...prevAnswers, answerData]);
    setQuiestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className={classes.Quiz}>
      <h1 className={classes.Quiz__title}>
        {questions[questionIndex].category}
      </h1>
      <GameCard saveAnswer={saveAnswer} questionIndex={questionIndex} />
    </div>
  );
};

export default Quiz;
