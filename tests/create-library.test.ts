import { test, expect } from "vitest";
import { createIndexFile, createIconIndex } from "../src/create-library";

const moduleNames = ["OneTwoThree", "TwoThreeFour"];

test("createIndexFile", () => {
  expect(createIndexFile(moduleNames)).toMatchSnapshot();
});

test("createIconIndex", () => {
  expect(createIconIndex(moduleNames)).toMatchSnapshot();
});
