import classes from "./Results.module.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { questionsActions } from "../../store/questionsSlice";
import { questionsData } from "../../utils/getReducers";

import ListItem from "../../components/ListItem";

const Results = () => {
  const dispatch = useDispatch();
  const { answers } = useSelector(questionsData);
  useEffect(
    () => () => {
      dispatch(questionsActions.setQuestions(null));
      dispatch(questionsActions.setAnswers(null));
    },
    [dispatch]
  );
  if (!answers) {
    return null;
  }
  const correctAnswersNumber = answers.reduce(
    (acc, answer) => (answer.isCorrectAnswer ? acc + 1 : acc),
    0
  );
  return (
    <div className={classes.Results}>
      <h1 className={classes.Results__title}>
        You scored
        <br /> {correctAnswersNumber} / 10
      </h1>
      <ul className={classes.Results__list}>
        {answers.map((answer, i) => (
          <ListItem key={i} answer={answer} />
        ))}
      </ul>
      <Link to="/" className={classes.Results__actionBtn}>
        Play again?
      </Link>
    </div>
  );
};

export default Results;
