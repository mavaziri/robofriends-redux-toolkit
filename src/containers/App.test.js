import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CounterButton from "../components/CounterButton";

it("expect to render CounterButton component", () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton color={mockColor} />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
