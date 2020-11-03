import { render, screen } from "@testing-library/react";
import ReactDOM from "react-dom";
import App, { getQuestions } from "./App";
describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});
