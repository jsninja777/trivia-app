import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

export const renderComponent = (component) => {
  return render(
    <BrowserRouter>
      <Provider store={store}>
        <React.StrictMode>{component}</React.StrictMode>
      </Provider>
    </BrowserRouter>
  );
};
