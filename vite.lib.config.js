import pkg from "./package.json";

const globals = {
  path: "path",
  "fs/promises": "fs",
  "tiny-glob": "glob",
}

export default {
  build: {
    lib: { entry: "src", name: pkg.name },
    rollupOptions: {
      external: [...Object.keys(pkg.dependencies), ...Object.keys(globals)],
      output: {
        globals
      },
    },
  },
};
