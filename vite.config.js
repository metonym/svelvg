import pkg from "./package.json";

export default {
  build: {
    lib: {
      entry: "src",
      name: pkg.name,
    },
    rollupOptions: {
      external: [...Object.keys(pkg.dependencies || {}), 'fs/promises', 'path'],
      output: {
        globals: {
          'path': 'path',
          'fs/promises': 'fs',
          'tiny-glob': 'glob'
        }
      }
    },
  },
};
