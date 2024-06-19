import { toModuleName } from "../src/to-module-name";

test("toModuleName", () => {
  expect(toModuleName("icon")).toEqual("Icon");
  expect(toModuleName("icon_one_two")).toEqual("Icon_one_two");
  expect(toModuleName("one-two-three.svg")).toEqual("OneTwoThree");
  expect(toModuleName("icon 123.svg")).toEqual("Icon123");
  expect(toModuleName("0icon")).toEqual("_0icon");
});
