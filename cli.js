#!/usr/bin/env node

import { createLibrary } from "svelvg";

/**
 * @type {Record<string, string>}
 */
const input = process.argv.slice(2).reduce((flags, flag) => {
  const [key, value] = flag.split("=");

  return {
    ...flags,
    [key]: value === undefined || value === "true" ? true : value,
  };
}, {});

createLibrary(input.glob, input);