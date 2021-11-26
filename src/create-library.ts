import tg from "tiny-glob";
import fs from "fs/promises";
import path from "path";
import { templateSvelte, templateTs } from "./template";
import { toModuleName } from "./to-module-name";

interface Options {
  /** @default "lib" */
  outDir: string;

  /** @default false */
  iconIndex: boolean | string;

  /**
   * Callback to add a list of classes to the SVG element
   * provided the original filename and module name
   * @example
   * filename: "alarm-fill"
   * moduleName: "AlarmFill"
   */
  appendClassNames: (filename: string, moduleName: string) => string[];

  /**
   * Override the default module name
   */
  toModuleName: (params: { path: path.ParsedPath; moduleName: string }) => string;
}

export async function createLibrary(glob: string, options: Partial<Options>) {
  const outDir = options?.outDir ?? "lib";

  let iconIndex: boolean | string = false;

  if (typeof options?.iconIndex === "string") {
    iconIndex = options.iconIndex;
  } else if (options?.iconIndex === true) {
    iconIndex = "ICON_INDEX.md";
  }

  let libPath = glob;

  if (!/^node_modules/.test(libPath)) {
    libPath = path.join("node_modules", glob);
  }

  if (!/\*.svg$/.test(libPath)) {
    libPath = path.join(libPath, "*.svg");
  }

  const libDir = path.parse(libPath).dir;

  try {
    await fs.stat(libDir);
  } catch (error) {
    console.error(`[createLibrary] path does not exist: ${libDir}`);
    process.exit(1);
  }

  try {
    const dir = path.join(process.cwd(), outDir);

    await fs.rmdir(dir, { recursive: true });
    await fs.mkdir(dir);

    const files = await tg(libPath.replace(/\*.svg$/, "**/*.svg"));
    const moduleNames: string[] = [];

    for (const filename of files) {
      const source = await fs.readFile(filename, "utf-8");
      const parsedPath = path.parse(filename);

      let moduleName = toModuleName(parsedPath.name);

      if (options?.toModuleName) moduleName = options.toModuleName({ path: parsedPath, moduleName });

      const classes = options?.appendClassNames?.call(null, parsedPath.name, moduleName) ?? [];
      const svg = templateSvelte(source, filename, { classes });
      const ts = templateTs(moduleName);

      fs.writeFile(path.join(dir, `${moduleName}.svelte`), svg);
      fs.writeFile(path.join(dir, `${moduleName}.svelte.d.ts`), ts);

      moduleNames.push(moduleName);
    }

    const uniqueModuleNames = [...new Set(moduleNames)];
    const index = uniqueModuleNames
      .map((moduleName) => `export { default as ${moduleName} } from "./${moduleName}.svelte";\n`)
      .join("");

    fs.writeFile(path.join(dir, "index.js"), index);
    fs.writeFile(path.join(dir, "index.d.ts"), index);

    console.log(`⚡ Converted ${uniqueModuleNames.length} icons from "${glob}" to Svelte components in "${outDir}"`);

    if (iconIndex) {
      fs.writeFile(
        path.join(process.cwd(), iconIndex),
        `# Icon Index

> ${uniqueModuleNames.length} total icons

## Icons

${uniqueModuleNames.map((moduleName) => `- ${moduleName}\n`).join("")}\n`
      );

      console.log(`✏️ Wrote icon index to "${iconIndex}"`);
    }
  } catch (error) {
    console.error(error);
  }
}