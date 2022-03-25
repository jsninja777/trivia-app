import classes from "./ListItem.module.scss";
import { useFormatTextHook } from "../../utils/hooks";

const ListItem = ({ answer }) => {
  const textRef = useFormatTextHook(answer.questionText);
  const sign = answer.isCorrectAnswer ? "+" : "-";
  return (
    <li className={classes.ListItem}>
      <span>{sign}</span>
      <p ref={textRef}></p>
    </li>
  );
};
export default ListItem;
