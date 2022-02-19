const svelvg = require("svelvg");

(async () => {
  await svelvg.createLibrary("node_modules/bootstrap-icons/icons");
  await svelvg.createLibrary("bootstrap-icons/icons/*.svg", {
    outDir: "dist",
    iconIndex: true,
  });
  await svelvg.createLibrary("bootstrap-icons/icons/*.svg", {
    outDir: "build",
    iconIndex: "ICONS.md",
    appendClassNames: (filename, moduleName) => {
      return [moduleName, "className"];
    },
    toModuleName({ path, moduleName }) {
      return moduleName + 1;
    },
  });
})();
