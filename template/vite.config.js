import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import { ghPages } from "vite-plugin-gh-pages";

export default defineConfig({
  // replace with "npm-name"
  base: "/svelvg/",
  plugins: [
    svelte({
      compilerOptions: { dev: false, immutable: true },
    }),
    ghPages(),
  ],
});
