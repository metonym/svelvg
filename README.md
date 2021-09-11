# svelvg

> Convert SVG files into Svelte components with TypeScript definitions.

> Successor to [svg-to-svelte](https://github.com/metonym/svg-to-svelte)

This library transforms SVG files into Svelte components through the following:

- convert the `svg` file name into a JavaScript-compatible module name (e.g., `alarm-fill` --> `AlarmFill`)
- forward `$$restProps` to the `svg` element while preserving attributes from the original `svg`
- add a default `slot` as child element to `svg`
- generate a TypeScript definition by extending the `SvelteComponentTyped` interface

## Usage

### CLI

The easiest way to use this library is through [npx](https://nodejs.dev/learn/the-npx-nodejs-package-runner).

The `glob` value represents the relative path to the folder containing SVG files inside `node_modules/`.

For example, say you have [bootstrap-icons](https://github.com/twbs/icons) installed as a development dependency. The library contains icon SVG files in the "icons" folder.

You could therefore run the following command to generate Svelte components:

```sh
npx svelvg glob=bootstrap-icons/icons
```

By default, the output directory is `"lib"`. Customize the directory using the `outDir` flag:

```sh
npx svelvg glob=bootstrap-icons/icons outDir=dist
```

Optionally, generate an index of icons (a list of all module names) by enabling the `iconIndex` flag. It will default to creating a `ICON_INDEX.md` file in your working directory.

```sh
npx svelvg glob=bootstrap-icons/icons iconIndex
```

Customize the icon index file name like so:

```sh
npx svelvg glob=bootstrap-icons/icons iconIndex=ICONS.md
```

### Node.js

Alternatively, install `svelvg` from NPM to use it programmatically.

**Yarn**

```sh
yarn add -D svelvg
```

**NPM**

```sh
npm i -D svelvg
```

```js
const svelvg = require("svelvg");

(async () => {
  // Emits components to the `lib` folder
  await svelvg.createLibrary("bootstrap-icons/icons");

  // Customize the output directory to be `dist`
  await svelvg.createLibrary("bootstrap-icons/icons", { outDir: "dist" });
})();
```

### API

#### Options

```ts
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
```

## Template

Scaffold a new project using the [template](template):

```sh
npx degit metonym/svelvg/template <folder-name>
```

## License

[MIT](LICENSE)
