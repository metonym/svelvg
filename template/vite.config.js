import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import { ghPages } from "vite-plugin-gh-pages";

export default defineConfig({
  base: "/npm-name/",
  plugins: [
    svelte({ hot: !process.env.VITEST, }),
    ghPages(),
  ],
  server: {
    fs: {
      allow: ['../']
    }
  }
});
