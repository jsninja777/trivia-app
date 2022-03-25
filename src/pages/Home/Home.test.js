import { renderComponent } from "../../testsUtils";
import { screen } from "@testing-library/react";
import Home from ".";

test("renders Home component", () => {
  renderComponent(<Home />);
  const title = screen.getByText(/welcome to the/i);
  expect(title).toBeInTheDocument();
});
