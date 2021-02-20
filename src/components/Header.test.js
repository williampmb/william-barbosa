import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { findComponentByTagTest } from "../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without erros", () => {
    //console.log(component.debug());
    const wrapper = findComponentByTagTest(component, "navbar");
    expect(wrapper.length).toBe(1);
  });

  it("Should render Home,Project and Contact NavLinks", () => {
    const wrapper = findComponentByTagTest(component, "navmenu");
    const wrapChildren = wrapper.children();
    expect(wrapChildren.length).toBe(3);
  });
});
