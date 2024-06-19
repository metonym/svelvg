import * as imports from "../src";

test("API", () => {
  expect(Object.keys(imports)).toEqual(["createLibrary", "toModuleName"]);
});
