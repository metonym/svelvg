#!/usr/bin/env node

const input = process.argv.slice(2).reduce((flags, flag) => {
  const [key, value] = flag.split("=");

  return {
    ...flags,
    [key]: value
  }
}, {});

require("./dist/svelvg.es").createLibrary(input.glob, input);