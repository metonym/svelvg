import { describe, it, expect } from "vitest";
import * as API from "../lib";
import pkg from "../package.json";

describe("Library", () => {
  it("has 0 dependencies", () => {
    expect(Object.keys(pkg.dependencies ?? {}).length).toEqual(0);
  });

  it("has exports", () => {
    expect(API.default).toBeUndefined();

    const exports = Object.keys(API);
    expect(exports.length).toMatchInlineSnapshot('1805');
    expect(exports).toMatchSnapshot();
  });
});
