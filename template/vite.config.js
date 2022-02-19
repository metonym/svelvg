import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import { ghPages } from "vite-plugin-gh-pages";

export default defineConfig({
  // replace with "npm-name"
  base: "/svelvg/",

  plugins: [svelte({
    compilerOptions: { immutable: true },
    hot: !process.env.VITEST
  }), ghPages()],

  // remove this
  server: {
    fs: {
      allow: ["../"],
    },
  },
});
