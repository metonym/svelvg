# svelvg

> Convert SVG files into Svelte components with TypeScript definitions.

> Successor to [svg-to-svelte](https://github.com/metonym/svg-to-svelte)

This library transforms SVG files into Svelte components and does the following:

- converts the `svg` file name into a JavaScript-compatible module name (e.g., `alarm-fill` --> `AlarmFill`)
- forwards `$$restProps` to the `svg` element while preserving original `svg` attributes
- adds a default `slot` as child element to `svg`
- generates a corresponding TypeScript definition

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

### Node.js

Alternatively, install `svelvg` from NPM for programmatic usage.

```sh
yarn add -D svelvg
# OR
npm i -D svelvg
```

```js
const svelvg = require("svelvg");

(async () => {
  await svelvg.createLibrary("bootstrap-icons/icons");

  // Custom output directory
  await svelvg.createLibrary("bootstrap-icons/icons", { outDir: "dist" });
})();
```

## License

[MIT](LICENSE)
