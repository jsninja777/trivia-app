import classes from "./Home.module.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getQuestionsData } from "../../store/questionsSlice/api";
import routes from "../../routes";
import { questionsActions } from "../../store/questionsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(questionsActions.setQuestions(null));
  }, [dispatch]);

  const startToPlay = () => {
    dispatch(getQuestionsData(() => navigate(routes.quizepage)));
  };
  return (
    <div className={classes.Home}>
      <h1 className={classes.Home__title}>
        Welcome to the
        <br /> Trivia Challenge
      </h1>
      <p className={classes.Home__text}>
        Yoy will be presented
        <br /> with 10 True or False
        <br /> questions.
      </p>
      <p className={classes.Home__text}>Can you score 100%?</p>
      <button onClick={startToPlay} className={classes.Home__startBtn}>
        Begin
      </button>
    </div>
  );
};

export default Home;
