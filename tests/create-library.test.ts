import { createIndexFile, createIconIndex } from "../src/create-library";

const moduleNames = ["OneTwoThree", "TwoThreeFour", "_123"];

test("createIndexFile", () => {
  expect(createIndexFile(moduleNames))
    .toEqual(`export { default as OneTwoThree } from "./OneTwoThree.svelte";
export { default as TwoThreeFour } from "./TwoThreeFour.svelte";
export { default as _123 } from "./_123.svelte";
`);
});

test("createIconIndex", () => {
  expect(createIconIndex(moduleNames)).toEqual(`# Icon Index

> 3 total icons

## Icons

- OneTwoThree
- TwoThreeFour
- \\_123
`);
});
