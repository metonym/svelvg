# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

- support multiple glob paths
- configure default width/height for the `svg` element
- preprocessor to re-write icon imports
- option to generate `METADATA.json`, which contains icon library info in JSON format
- auto-generate README docs

## [0.4.0](https://github.com/metonym/svelvg/releases/tag/v0.4.0) - 2021-08-28

- preserve underscores (`_`) when generating the module name

## [0.3.2](https://github.com/metonym/svelvg/releases/tag/v0.3.2) - 2021-08-28

- avoid duplicate module names in generated `lib/index.js`, `lib/index.d.ts`

## [0.3.1](https://github.com/metonym/svelvg/releases/tag/v0.3.1) - 2021-08-09

- generate `index.d.ts`

## [0.3.0](https://github.com/metonym/svelvg/releases/tag/v0.3.0) - 2021-07-31

**Features**

- add callback `appendClassNames` to add class names provided the filename/module name

**Fixes**

- `cli.js` should convert `undefined` values to `true`

## [0.2.0](https://github.com/metonym/svelvg/releases/tag/v0.2.0) - 2021-07-31

- Add option to generate an icon index in Markdown format

## [0.1.1](https://github.com/metonym/svelvg/releases/tag/v0.1.1) - 2021-07-31

- Use UMD entry in `cli.js`

## [0.1.0](https://github.com/metonym/svelvg/releases/tag/v0.1.0) - 2021-07-31

- Initial release
