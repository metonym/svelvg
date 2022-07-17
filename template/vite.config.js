import { svelte } from "@sveltejs/vite-plugin-svelte";
import { ghPages } from "vite-plugin-gh-pages";

/** @type {import('vite').UserConfig} */
export default {
  plugins: [svelte(), ghPages()],
};
