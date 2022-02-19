import { test, expect } from "vitest";
import * as imports from "../src";

test("API", () => {
  expect(Object.keys(imports)).toMatchInlineSnapshot(`
    [
      "createLibrary",
      "toModuleName",
    ]
  `);
});
