import checkPropTypes from "check-prop-types";

export const findComponentByTagTest = (component, attr) => {
  return component.find(`[tagTest='${attr}']`);
};

export const checkProps = (component, expectedProps) => {
  return checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
};
