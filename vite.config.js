const replace = {
  name: "replace",
  transform(code, id) {
    if (/index.html/.test(id)) {
      return code.replace(
        /IS_PULL_REQUEST/g,
        process.env.IS_PULL_REQUEST || false
      );
    }
  },
};

export default {
  plugins: [replace],
  build: { outDir: "public" },
};
