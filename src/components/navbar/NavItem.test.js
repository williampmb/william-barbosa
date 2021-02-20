import React, { Component } from "react";
import { shallow } from "enzyme";
import NavItem from "./NavItem";
import { findComponentByTagTest, checkProps } from "../Utils";

const setup = (props = {}) => {
    return shallow(<NavItem {...props} />);
};

describe("NavBar Menu Item Component", () => {
    describe("Have props", () => {
        let component;

        beforeEach(() => {
            const props = {
                children: "Name Section",
                toPath: "/myPath",
                onClick: () => {},
            };
            component = setup(props);
        });

        it("Should render without errors", () => {
            const wrapper = findComponentByTagTest(component, "nav-item");
            expect(wrapper.length).toBe(1);
        });
    });

    describe("Have no props", () => {
        let component;

        beforeEach(() => {
            component = setup();
        });
        it("Should not render", () => {
            const wrapper = findComponentByTagTest(component, "nav-item");
            expect(wrapper.length).toBe(0);
        });
    });

    describe("Checking proptyes", () => {
        it("Should not throw a warning", () => {
            const expectedProps = {
                children: "Menu Item Name",
                toPath: "/toSomewhere",
                onClick: () => {},
            };
            const propsError = checkProps(NavItem, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });
});
