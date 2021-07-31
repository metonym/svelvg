import tg from "tiny-glob";
import fs from "fs/promises";
import path from "path";
import { templateSvelte, templateTs } from "./template";
import { toModuleName } from "./to-module-name";

interface Options {
  /** @default "lib" */
  outDir: string;
}

export async function createLibrary(glob: string, options: Partial<Options>) {
  const outDir = options?.outDir ?? "lib";

  let libPath = glob;

  if (!/^node_modules/.test(libPath)) {
    libPath = path.join("node_modules", glob);
  }

  if (!/\*.svg$/.test(libPath)) {
    libPath = path.join(libPath, "*.svg");
  }

  const dir = path.parse(libPath).dir;

  try {
    await fs.stat(dir);
  } catch (error) {
    console.error(`[createLibrary] path does not exist: ${dir}`);
    process.exit(1);
  }

  try {
    const dir = path.join(process.cwd(), outDir);

    await fs.rmdir(dir, { recursive: true });
    await fs.mkdir(dir);

    const files = await tg(libPath);
    const moduleNames: string[] = [];

    for (const filename of files) {
      const source = await fs.readFile(filename, "utf-8");
      const moduleName = toModuleName(path.parse(filename).name);
      const svg = templateSvelte(source, filename);
      const ts = templateTs(moduleName);

      fs.writeFile(path.join(dir, `${moduleName}.svelte`), svg);
      fs.writeFile(path.join(dir, `${moduleName}.svelte.d.ts`), ts);

      moduleNames.push(moduleName);
    }

    fs.writeFile(
      path.join(dir, "index.js"),
      moduleNames
        .map(
          (moduleName) =>
            `export { default as ${moduleName} } from "./${moduleName}.svelte";\n`
        )
        .join("")
    );
  } catch (error) {
    console.error(error);
  }
}
