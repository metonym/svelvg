import fs from "fs";

const pkg = JSON.parse(
  fs.readFileSync(new URL("./package.json", import.meta.url), "utf8")
);
const { name, dependencies } = pkg;

const globals = {
  path: "path",
  "fs/promises": "fs",
  "fs": "existsSync",
  "tiny-glob": "glob",
}

export default {
  build: {
    lib: { entry: "src", name },
    rollupOptions: {
      external: [...Object.keys(dependencies), ...Object.keys(globals)],
      output: {
        globals
      },
    },
  },
};
