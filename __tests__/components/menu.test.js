import React from "react";
import Menu from "../../src/shared/components/menu";
import { shallow } from "enzyme";

describe("Menu", () => {
  test("match snapshot", () => {
    const wrapper = shallow(<Menu/>);
    expect(wrapper).toMatchSnapshot();
  });
});
