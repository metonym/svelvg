/**
 * @typedef {any} DefaultValue
 * @type {Record<string, DefaultValue>}
 */
const ENV_VARS = {
  IS_PULL_REQUEST: false,
  RENDER_GIT_BRANCH: "",
  RENDER_GIT_COMMIT: "",
};

console.log(process.env)

const replace = {
  name: "replace",
  transform(code, id) {
    if (/index.html/.test(id)) {
      Object.entries(ENV_VARS).forEach(([key, value]) => {
        code = code.replace(new RegExp(key, "g"), process.env[key] || value);
      });

      return code;
    }
  },
};

export default {
  plugins: [replace],
  build: { outDir: "public" },
};
