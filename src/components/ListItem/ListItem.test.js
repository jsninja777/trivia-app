import { renderComponent } from "../../testsUtils";
import ListItem from ".";

test("renders ListItem component and transforms text", () => {
  const item = { isCorrectAnswer: true, questionText: "&quot;some question&quot;" };
  const { container } = renderComponent(<ListItem answer={item} />);
  const p = container.querySelector("p");
  expect(p.innerHTML).toBe('"some question"');
});
