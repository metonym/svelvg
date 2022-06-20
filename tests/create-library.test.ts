import { test, expect } from "vitest";
import { createIndexFile, createIconIndex } from "../src/create-library";

const moduleNames = ["OneTwoThree", "TwoThreeFour", "_123"];

test("createIndexFile", () => {
  expect(createIndexFile(moduleNames)).toMatchSnapshot();
});

test("createIconIndex", () => {
  expect(createIconIndex(moduleNames)).toMatchSnapshot();
});
