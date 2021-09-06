#!/usr/bin/env node

const input = process.argv.slice(2).reduce((flags, flag) => {
  const [key, value] = flag.split("=");

  return {
    ...flags,
    [key]: value === undefined || value === "true" ? true : value,
  };
}, {});

require("./dist/svelvg.umd").createLibrary(input.glob, input);
