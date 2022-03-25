import { useSelector } from "react-redux";
import classes from "./GameCard.module.scss";
import { questionsData } from "../../utils/getReducers";
import { useFormatTextHook } from "../../utils/hooks";

const GameCard = ({ saveAnswer, questionIndex }) => {
  const { questions } = useSelector(questionsData);
  const textRef = useFormatTextHook(questions[questionIndex].question);
  return (
    <div className={classes.GameCard}>
      <section className={classes.GameCard__card}>
        <p ref={textRef} className={classes.text}></p>
        <div>
          <button onClick={saveAnswer}>True</button>
          <button onClick={saveAnswer}>False</button>
        </div>
      </section>
      <p className={classes.text}>{questionIndex + 1} of 10</p>
    </div>
  );
};
export default GameCard;
