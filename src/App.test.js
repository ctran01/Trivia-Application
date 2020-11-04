import { mount, shallow, configure } from "enzyme";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Main from "./components/Main";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("App", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});

describe("Main", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(<App />);
  });

  afterAll(() => {
    wrapper.unmount();
  });

  it("renders Header", () => {
    const trivia = <h1>Welcome to my Trivia Game! Click start to begin!</h1>;
    expect(wrapper.contains(trivia)).toEqual(true);
  });

  it("state has 10 questions", () => {
    const onStart = jest.fn();
    wrapper = mount(<App questions={[]} />);

    wrapper.find(".start-button").simulate("click");

    expect(wrapper.state(questions)).toHaveLength(numQuestions);
  });
});
