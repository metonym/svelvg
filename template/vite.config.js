import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import { ghPages } from "vite-plugin-gh-pages";

export default defineConfig({
  base: "/svelvg/", // replace with "npm-name"
  plugins: [svelte({ hot: !process.env.VITEST }), ghPages()],

  // remove this
  server: {
    fs: {
      allow: ["../"],
    },
  },
});
