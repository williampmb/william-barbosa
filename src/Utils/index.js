export const findComponentByTagTest = (component, attr) => {
  return component.find(`[tagTest='${attr}']`);
};
