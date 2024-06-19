import { createLibrary } from "svelvg";

await createLibrary("node_modules/bootstrap-icons/icons");
await createLibrary("bootstrap-icons/icons/*.svg", {
  outDir: "dist",
  iconIndex: true,
});
await createLibrary("bootstrap-icons/icons/*.svg", {
  outDir: "build",
  iconIndex: "ICONS.md",
  appendClassNames: (filename, moduleName) => {
    return [moduleName, "className"];
  },
  toModuleName({ path, moduleName }) {
    return moduleName + 1;
  },
});
