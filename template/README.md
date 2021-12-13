# npm-name

[![NPM][npm]][npm-url]

> [lib-name SVG icons](lib-url) as Svelte components.

<!-- REPO_URL -->

<!-- Try it in the [Svelte REPL](). -->

---

<!-- TOC -->

## Installation

**Yarn**

```bash
yarn add -D npm-name
```

**NPM**

```bash
npm i -D npm-name
```

**pnpm**

```bash
pnpm i -D npm-name
```

## Usage

### Basic

```svelte
<script>
  import { Analytics, Camera, DocumentImage } from "npm-name";
</script>

<Analytics />
<Camera />
<DocumentImage />
```

Refer to [ICON_INDEX.md](ICON_INDEX.md) for a list of supported icons.

### Direct import

Use the direct import for faster compiling during development.

**Note:** even if using base imports, unused imports are still tree shakeable by application bundlers like Rollup or webpack.

```html
<script>
  import Add from "npm-name/lib/Add.svelte";
</script>
```

## Using `svelte:component`

```svelte
<script>
  import * as icons from "npm-name";
</script>

{#each Object.entries(icons) as [icon, component]}
  <div>
    <svelte:component this={component} />
    {icon}
  </div>
{/each}
```

## TypeScript

Svelte version 3.31 or greater is required to use this library with TypeScript.

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/npm-name.svg?color=%237d4cdb&style=for-the-badge
[npm-url]: https://npmjs.com/package/npm-name
